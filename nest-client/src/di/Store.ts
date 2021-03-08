

class Store {
    private _global: { [token: string]: any } = {};
    public exists(token: string): boolean {
        return !!this._global[token]
    }
    public put(token: string, value: any) {
        this._global[token] = value;
    }
    public get(token: string) {
        return this._global[token]
    }
    public delete(token: string) {
        delete this._global[token]
    }
    public clear() {
        this._global = {}
    }
}

export default Store;