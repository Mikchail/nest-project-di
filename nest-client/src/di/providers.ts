import { FactoryClass } from "./factories";

interface Provider {
  // eslint-disable-next-line @typescript-eslint/ban-types
  use: Function | object;
  factory: FactoryClass<any>;
}

interface IInjectionConfigItem { [token: string]: Provider; }
interface IInjectionConfig { [moduleName: string]: IInjectionConfigItem; }

export type { Provider, IInjectionConfigItem, IInjectionConfig };
