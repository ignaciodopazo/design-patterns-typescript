/**
 * The "type" `any` is used instead of generic types because in Typescript we
 * cannot declare a static member as value of a generic type.
 */
export class Singleton {

    private static theObject: any = undefined;

    constructor(initObject: any, initMorphism: (x: any) => any) {
        if (Singleton.theObject === undefined) {
            Singleton.theObject = initMorphism(initObject);
        }
    }

    public static getInstance(): any {
        return Singleton.theObject;
    }

    public static updateInstance(aMorphism: (x: any) => any) {
        Singleton.theObject = aMorphism(Singleton.theObject);
    }
}

/**
 * However, in Typescript/Javascript an easier way of do a singleton
 * is creating an object through `const` keywork but allowing to modify
 * its content by destructive assignment.
 */
export const singleton: { theObject: any } = { theObject: undefined };
