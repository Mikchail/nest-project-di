import { Route, Switch } from "react-router";
import { AppComponent } from "../base";
import { CreateTrackPageType, MainPageType, TrackPageType } from "../pages";

class MainRouters<P, S>
  extends AppComponent<P, S> {

  protected mainPage: MainPageType = this.injector.get("pages", "MainPage");
  protected tracksPage: TrackPageType = this.injector.get("pages", "TracksPage");
  protected createTrackPage: CreateTrackPageType = this.injector.get("pages", "CreateTrackPage");

  render() {
    return (
      <Switch>
        <Route path="/" component={this.mainPage} exact={true} />
        <Route path="/tracks" component={this.tracksPage} exact={true} />
        <Route path="/tracks/create" component={this.createTrackPage} exact={true} />
      </Switch>
    )
  }
}

export type MainRoutersType = typeof MainRouters;
export default MainRouters