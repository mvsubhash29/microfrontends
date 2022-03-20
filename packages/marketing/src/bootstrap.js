import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDom.render(
    <App />,
    el
  );
};
// Mount function to start up the app


if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root');

  if (devRoot) {
    mount(devRoot);
  }
}
// If we are in development and in isolation,
// call mount immediately

// we are running through container we should export the mount function
export {mount};