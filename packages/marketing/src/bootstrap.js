import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(
    <App history={history} />,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
};
// Mount function to start up the app


if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
// If we are in development and in isolation,
// call mount immediately

// we are running through container we should export the mount function
export {mount};