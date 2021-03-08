import { AppComponent } from "../base";
import { NavBarType } from "../components";

export interface ILayoutProps {
  location?: any;
}

interface ILayoutState {

}
abstract class Layout<
  P extends ILayoutProps = ILayoutProps,
  S extends ILayoutState = ILayoutState> extends AppComponent<P, S> {

  protected navBar: NavBarType = this.injector.get("components", "NavBar");

  abstract renderPage(): JSX.Element

  componentDidUpdate(prevProps: P) {
    // will be true
    const locationChanged =
      this.props.location !== prevProps.location;
    if (locationChanged) {
      console.log(this.props);
    }
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <this.navBar />
        {this.renderPage()}
      </div>
    )
  }
}

export type LayoutType = typeof Layout;
export default Layout;