/**
 * A singleton factory.
 */
export class SingletonFactory {
    private static singletons: Map<Symbol, aSingleton> = new Map();

    constructor () {}

    public static createSingleton(
        id: Symbol, initObject: any,
        initMorphism: (x: any) => any
    ){
        if (!SingletonFactory.singletons.has(id)) {
            SingletonFactory.singletons.set(
                id,
                new aSingleton(initObject, initMorphism)
            );
        }
    }

    public static getSingleton(id: Symbol): aSingleton | undefined {
        return SingletonFactory.singletons.get(id);
    }

    public static updateSingleton(id: Symbol, aMorphism: (x: any) => any) {
        let singleton = SingletonFactory.singletons.get(id);
        if (singleton !== undefined) {
            singleton.updateInstance(aMorphism);
        }
    }
}

class aSingleton {
    private theObject: any

    constructor(initObject: any, initMorphism: (x: any) => any) {
        if (this.theObject === undefined) {
            this.theObject = initMorphism(initObject);
        }
    }

    public getInstance(): any {
        return this.theObject;
    }

    public updateInstance(aMorphism: (x: any) => any) {
        this.theObject = aMorphism(this.theObject);
    }
}