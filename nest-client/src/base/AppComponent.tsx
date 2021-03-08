import { Component } from "react";
import { AppRoot } from ".";
import { Injector } from "../di";
import { history } from "../routers/histrory";

abstract class AppComponent<P, S>
  extends Component<P, S> {

  protected get injector(): Injector {
    return AppRoot.injector;
  }

  public get router() {
    return history
  }
}

export default AppComponent;