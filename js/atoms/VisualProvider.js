import React from 'react';

export const VisualContext = React.createContext({
  t: k => k,
  offline: false,
});

export class VisualProvider extends React.Component {
  render() {
    const { children, t, offline } = this.props;

    return (
      <VisualContext.Provider value={{ t: t || (k => k), offline }}>
        {children}
      </VisualContext.Provider>
    );
  }
}

export function visualProvided(Component) {
  // eslint-disable-next-line react/no-multi-comp, react/prefer-stateless-function
  class VisualProviderPropsHoc extends React.Component {
    render() {
      return (
        <VisualContext.Consumer>
          {({ t, offline }) => <Component {...this.props} t={t} offline={offline} />}
        </VisualContext.Consumer>
      );
    }
  }

  return VisualProviderPropsHoc;
}
