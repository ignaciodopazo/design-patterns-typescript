/**
 * A singleton factory.
 */
export abstract class SingletonFactory {
    private static theObject: any;

    constructor(initObject: any, initMorphism: (x: any) => any) {
        if (SingletonFactory.theObject === undefined) {
            SingletonFactory.theObject = initMorphism(initObject);
        }
    }

    public static getInstance(): any {
        return SingletonFactory.theObject;
    }

    public static updateInstance(aMorphism: (x: any) => any) {
        SingletonFactory.theObject = aMorphism(SingletonFactory.theObject);
    }
}
