import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InjectionStore, Injector } from './di';
import DIConfig from './config/DIConfig';
import { AppRoot } from './base';

AppRoot.injector = new Injector(DIConfig, new InjectionStore());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
