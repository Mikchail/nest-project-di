import { AppRoot } from ".";
import { Injector } from "../di";


class AppObject {

    protected get injector(): Injector {
        return AppRoot.injector;
    }

    protected get AppStore() {
        return this.injector.get("global", "reduxStore")
    }

    public init() { }
}

export default AppObject;