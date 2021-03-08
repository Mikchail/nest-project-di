import { ComponentType } from "react";
import { AppObject } from "../base";

abstract class Factory<T> {
    constructor() { }
    public abstract create(constructor: any): T
    public abstract init(object: T): void

}

type FactoryClass<T> = new () => Factory<T>;

class ReactComponentFactory extends Factory<ComponentType>{
    public create(constructor: ComponentType) {
        return constructor;
    }
    public init(_: ComponentType) { }
}

type ReactComponentFactoryClass = new () => ReactComponentFactory

class AppObjectFactory extends Factory<AppObject> {
    public create(constructor: AppObjectFactoryClass): AppObject {
      return new constructor();
    }
    public init(object: AppObject) {
      object.init();
    }
  }

type AppObjectFactoryClass = new () => AppObject;

export type {
    FactoryClass,
    ReactComponentFactoryClass,
    AppObjectFactoryClass
}
export { ReactComponentFactory, AppObjectFactory }