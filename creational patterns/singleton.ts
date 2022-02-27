/**
 * The generic typing is for producing a unique `theObject` out of
 * any `initMorphism` applied to `initObject`.
 * The "type" `any` is used instead of generic types because in Typescript we
 * cannot declare a static member as a generic type.
 */
export class Singleton {

    private static theObject: any | undefined = undefined;

    constructor(initObject: any, initMorphism: (x: any) => any) {
        if (!Singleton.theObject) {
            Singleton.theObject = initMorphism(initObject);
        }
    }

    public getInstance(): any | undefined {
        if (Singleton.theObject) {
            return Singleton.theObject
        }
    }

    public updateInstance(aMorphism: (x: any) => any) {
        Singleton.theObject = aMorphism(Singleton.theObject)
    }
}

/**
 * However, in Typescript/Javascript an easier way of do a singleton
 * is creating an object through `const` keywork but allowing to be
 * modified by destructive assignment, unlike the Singleton class to
 * which is impossible.
 */
export const singleton: { theObject: any } = { theObject: 0 }

