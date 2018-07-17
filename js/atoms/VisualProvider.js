import React from 'react';
import PropTypes from 'prop-types';

export class VisualProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offline: props.offline || false,
      t: props.t || (key => key),
    };
  }

  getChildContext() {
    const { offline, t } = this.state;
    return {
      isOffline: () => offline,
      translate: t,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offline !== this.props.offline) this.setState({ offline: nextProps.offline }); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    return this.props.children; // eslint-disable-line react/destructuring-assignment
  }
}

VisualProvider.childContextTypes = {
  isOffline: PropTypes.func,
  translate: PropTypes.func,
};

export function visualProvided(Component) {
  // eslint-disable-next-line react/no-multi-comp, react/prefer-stateless-function
  class VisualProviderPropsHoc extends React.Component {
    render() {
      const { isOffline, translate } = this.context;
      return (
        <Component
          {...this.props}
          isOffline={isOffline || (() => false)}
          t={translate || (k => k)}
        />
      );
    }
  }

  VisualProviderPropsHoc.contextTypes = {
    isOffline: PropTypes.func,
    translate: PropTypes.func,
  };

  return VisualProviderPropsHoc;
}
