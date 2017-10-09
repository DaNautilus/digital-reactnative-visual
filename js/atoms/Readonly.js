/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import getDisplayName from '../utils/getDisplayName';

import { View } from 'react-native';
import Button from './Button';

const bool = x => typeof x === 'boolean';

/**
 * Similar to react form elements, readonly's can be controlled or uncontrolled.
 * - Pass in a "readonly" prop and the component is controlled.
 *   It's readonly state is solely dependant on the value of the prop.
 * - Pass in a "defaultReadonly" prop and the component is uncontrolled.
 *   It can be toggled using the "toggleReadonly" context method.
 */
export class ReadonlyProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { readonly: this.readonlyValue() };
    this.toggleReadonly = this.toggleReadonly.bind(this);
  }

  getChildContext() {
    const readonly = this.readonlyValue();
    const { toggleReadonly } = this;
    const { enforceReadonly } = this.props;
    return this.controlled()
      ? { readonly, enforceReadonly }
      : { readonly, enforceReadonly, toggleReadonly };
  }

  componentWillReceiveProps(newProps) {
    this.setState(oldState => ({
      readonly: this.readonlyValue(newProps, oldState)
    }));
  }

  readonlyValue(props = this.props, state = this.state) {
    const controlled = this.controlled();
    const uncontrolledValue = state && state.readonly;
    if (controlled) {
      return props.readonly;
    }
    if (bool(uncontrolledValue)) {
      return uncontrolledValue;
    }
    if (bool(props.defaultReadonly)) {
      return props.defaultReadonly;
    }
    return false;
  }

  controlled() {
    const controlled = bool(this.props.readonly);
    const uncontrolled = bool(this.props.defaultReadonly) || this.props.onChange;

    if (controlled && uncontrolled) {
      // eslint-disable-next-line no-console
      console.error('ReadonlyProvided should either be passed a "readonly" prop or a "defaultReadonly" and optional "onChange" prop, not both.');
    }

    return controlled;
  }

  toggleReadonly(newReadonly) {
    if (this.controlled()) {
      return;
    }

    if (this.props.enforceReadonly) return;

    this.setState(oldState => ({
      readonly: bool(newReadonly) ? newReadonly : !oldState.readonly
    }));

    if (this.props.onChange) {
      this.props.onChange(readonly);
    }
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

ReadonlyProvider.propTypes = {
  children: PropTypes.node,
  readonly: PropTypes.bool,
  defaultReadonly: PropTypes.bool
};

ReadonlyProvider.childContextTypes = {
  readonly: PropTypes.bool,
  enforceReadonly: PropTypes.bool,
  toggleReadonly: PropTypes.func
};

// --------------------
// --------------------
// --------------------

export function ReadonlyPanel({ inverse, children, style }, { readonly }) {
  if ((!inverse && !readonly) || (inverse && readonly)) return <View />;

  return <View style={style}>{children}</View>;
}

ReadonlyPanel.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool
};

ReadonlyPanel.contextTypes = { readonly: PropTypes.bool };

// --------------------
// --------------------
// --------------------

export function ReadonlyToggleButton(props, { toggleReadonly }) {
  if (toggleReadonly) {
    return <Button {...props} onPress={toggleReadonly} />;
  }
  return <View />;
}

ReadonlyToggleButton.contextTypes = { toggleReadonly: PropTypes.func };

// --------------------
// --------------------
// --------------------

export function readonlyAsProp(Component) {
  // eslint-disable-next-line react/no-multi-comp, react/prefer-stateless-function
  class ReadonlyPropsHoc extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          readonly={this.context.readonly}
          enforceReadonly={this.context.enforceReadonly}
          toggleReadonly={this.context.toggleReadonly}
        />
      );
    }
  }

  ReadonlyPropsHoc.displayName = `ReadonlyConnector(${getDisplayName(Component)})`;

  ReadonlyPropsHoc.contextTypes = {
    readonly: PropTypes.bool,
    enforceReadonly: PropTypes.bool,
    toggleReadonly: PropTypes.func
  };

  return ReadonlyPropsHoc;
}

// A hoc to wrap any component into a readonly.
// readonly props can be passed as hoc options or directly as props to the wrapped component.
export function readonly(hocOptions = {}) {
  return function Wrapper(WrappedComponent) {

    const ToProps = readonlyAsProp(WrappedComponent);

    function ReadonlyHoc(props) {
      const {
        readonly = hocOptions.readonly,
        enforceReadonly = hocOptions.enforceReadonly || props.enforceReadonly,
        defaultReadonly = hocOptions.defaultReadonly,
        onChange = hocOptions.onChange,
        ...rest
      } = props;

      return (
        <ReadonlyProvider
          readonly={readonly}
          enforceReadonly={enforceReadonly}
          defaultReadonly={defaultReadonly}
          onChange={onChange}
        >
          <ToProps {...rest} />
        </ReadonlyProvider>
      );
    }

    ReadonlyHoc.displayName = `ReadonlyProvider(${getDisplayName(ToProps)})`;

    return ReadonlyHoc;
  };
}
