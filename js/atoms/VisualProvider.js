import React from 'react';
import PropTypes from 'prop-types';

export class VisualProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offline: this.props.offline || false,
      t: this.props.t || (key => key)
    };
  }

  getChildContext() {
    return {
      isOffline: () => this.state.offline,
      translate: this.state.t
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offline !== this.props.offline) this.setState({ offline: nextProps.offline });
  }

  render() {
    return this.props.children;
  }
}

VisualProvider.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func
};

VisualProvider.childContextTypes = {
  isOffline: PropTypes.func,
  translate: PropTypes.func
};

export function visualProvided(Component) {
  // eslint-disable-next-line react/no-multi-comp, react/prefer-stateless-function
  class VisualProviderPropsHoc extends React.Component {
    render() {
      return <Component {...this.props} isOffline={this.context.isOffline || (() => (false))} t={this.context.translate || (k => (k))} />;
    }
  }

  VisualProviderPropsHoc.contextTypes = {
    isOffline: PropTypes.func,
    translate: PropTypes.func
  };

  return VisualProviderPropsHoc;
}
