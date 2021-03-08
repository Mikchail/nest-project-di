import { configureStore } from "@reduxjs/toolkit";
import { AppObject } from "./base";
import { reducers } from "./reducers";

class AppStore extends AppObject {

    public store: any;

    public get state(): any {
        return this.store.getState();
    }

    public async dispatch(action: any): Promise<void> {
        return this.store.dispatch(action);
    }

    public get reducers(): any {
        return reducers
    }

    constructor() {
        super();
        this.store = this.configureStore();
    }

    protected configureStore() {
        return configureStore({ reducer: this.reducers })
    }
}

export type AppStoreType = typeof AppStore;
export default AppStore;