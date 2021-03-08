


abstract class BaseReducer {

  private reducer: any;
  private action: any;
  private create: any;
  static reducer: any;
  constructor() {
    this.create = this.createReducer();
    this.reducer = this.create.reducer
    this.action = this.create.actions
  }

  public get reducers() {
    return this.reducer
  }

  static getReducers() {
    return this.reducer;
  }

  public get actions() {
    return this.action
  }

  abstract createReducer(): any;

}

export default BaseReducer;