import { IInjectionConfig } from "./providers";
import Store from "./Store";



class Injector {

    constructor(private _config: IInjectionConfig, private _store: Store) { }

    protected get store() {
        return this._store;
    }

    protected checkTokenExists(moduleName: string, token: string): void {
        if (!this._config[moduleName]) {
            throw new Error(`[DI] not this module ${moduleName}`)
        }
        if (!this._config[moduleName][token]) {
            throw new Error(`[DI] not this ${moduleName} and ${token}`)
        }

    }
    protected createIfNotExists(moduleName: string, token: string): void {
        const storeToken = [moduleName, token].join("/")
        if (!this.store.exists(storeToken)) {
            const factory = new this._config[moduleName][token].factory()
            const object = factory.create(this._config[moduleName][token].use)
            this.store.put(
                storeToken,
                object
            );
            factory.init(object)
        }
    }

    public get(moduleName: string, token: string): any {
        this.checkTokenExists(moduleName, token);
        this.createIfNotExists(moduleName, token);
        return this.store.get([moduleName, token].join("/"));
    }

}

export default Injector