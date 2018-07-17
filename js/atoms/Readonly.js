/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getDisplayName from '../utils/getDisplayName';

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
      readonly: this.readonlyValue(newProps, oldState),
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
    const { readonly, defaultReadonly, onChange } = this.props;
    const controlled = bool(readonly);
    const uncontrolled = bool(defaultReadonly) || onChange;

    if (controlled && uncontrolled) {
      // eslint-disable-next-line no-console
      console.error(
        'ReadonlyProvided should either be passed a "readonly" prop or a "defaultReadonly" and optional "onChange" prop, not both.'
      );
    }

    return controlled;
  }

  toggleReadonly(newReadonly) {
    const { enforceReadonly, onChange } = this.props;
    const { readonly } = this.state;

    if (this.controlled()) {
      return;
    }

    if (enforceReadonly) return;

    this.setState(oldState => ({
      readonly: bool(newReadonly) ? newReadonly : !oldState.readonly,
    }));

    if (onChange) {
      onChange(bool(newReadonly) ? newReadonly : !readonly);
    }
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

ReadonlyProvider.childContextTypes = {
  readonly: PropTypes.bool,
  enforceReadonly: PropTypes.bool,
  toggleReadonly: PropTypes.func,
};

// --------------------
// --------------------
// --------------------

export function ReadonlyPanel({ inverse, children, style }, { readonly }) {
  if ((!inverse && !readonly) || (inverse && readonly)) return <View />;

  return <View style={style}>{children}</View>;
}

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
      const { readonly, enforceReadonly, toggleReadonly } = this.context;
      return (
        <Component
          {...this.props}
          readonly={readonly}
          enforceReadonly={enforceReadonly}
          toggleReadonly={toggleReadonly}
        />
      );
    }
  }

  ReadonlyPropsHoc.displayName = `ReadonlyConnector(${getDisplayName(Component)})`;

  ReadonlyPropsHoc.contextTypes = {
    readonly: PropTypes.bool,
    enforceReadonly: PropTypes.bool,
    toggleReadonly: PropTypes.func,
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
        enforceReadonly = hocOptions.enforceReadonly || props.enforceReadonly, // eslint-disable-line react/destructuring-assignment
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
