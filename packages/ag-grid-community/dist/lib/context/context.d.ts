// Type definitions for ag-grid-community v20.2.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ILogger } from "../iLogger";
import { Component } from "../widgets/component";
export interface ContextParams {
    seed: any;
    beans: any[];
    components: ComponentMeta[];
    enterpriseDefaultComponents: any[];
    overrideBeans: any[];
    debug: boolean;
}
export interface ComponentMeta {
    theClass: new () => Object;
    componentName: string;
}
export declare class Context {
    private beanWrappers;
    private contextParams;
    private logger;
    private componentsMappedByName;
    private destroyed;
    constructor(params: ContextParams, logger: ILogger);
    private getBeanInstances;
    private setupComponents;
    private addComponent;
    createComponentFromElement(element: Element, afterPreCreateCallback?: (comp: Component) => void): Component;
    wireBean(bean: any, afterPreCreateCallback?: (comp: Component) => void): void;
    private wireBeans;
    private createBeans;
    private createBeanWrapper;
    private autoWireBeans;
    private methodWireBeans;
    private forEachMetaDataInHierarchy;
    private getBeanName;
    private getBeansForParameters;
    private lookupBeanInstance;
    private callLifeCycleMethods;
    getBean(name: string): any;
    getEnterpriseDefaultComponents(): any[];
    destroy(): void;
}
export declare function PreConstruct(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>): void;
export declare function PostConstruct(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>): void;
export declare function PreDestroy(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>): void;
export declare function Bean(beanName: string): Function;
export declare function Autowired(name?: string): Function;
export declare function Optional(name?: string): Function;
export declare function Qualifier(name: string): Function;
