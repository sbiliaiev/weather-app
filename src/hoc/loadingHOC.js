import React from 'react';

import './loadingHOC.css';

const isEmpty = prop => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = loadingProp => WrappedComponent => {
  return class WrappedWithHOC extends React.Component {
    render() {
      return (
        isEmpty(this.props[loadingProp])
        ? <div className="loader" />
        : <WrappedComponent {...this.props} />
      );
    }
  };
};

export default LoadingHOC;
