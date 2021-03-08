import { Component } from 'react';
import { Provider } from "react-redux"
import { AppRoot } from './base';
import AppStore from './store';
import { Router, BrowserRouter } from "react-router-dom";
import { MainRoutersType } from './routers';
import { history } from './routers/histrory';
import { Button } from '@material-ui/core';

interface AppState { }
interface AppProps { }


class App extends Component<AppProps, AppState> {

  protected mainRouters: MainRoutersType;
  protected appStore: AppStore;

  constructor(props: AppProps) {
    super(props);
    this.mainRouters = AppRoot.injector.get("routers", "MainRouters")
    this.appStore = AppRoot.injector.get("global", "ReduxStore");
  }
  public componentDidUpdate(prevProps: AppProps) {
    // will be true
    // const locationChanged =
      // this.props.location !== prevProps.location;
  }

  render() {
    return (
      <Provider store={this.appStore.store}>
        <Router history={history}>
          <this.mainRouters />
        </Router>
      </Provider>
    );
  }
}
export default App;
