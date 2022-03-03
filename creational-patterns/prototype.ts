interface Prototype<T> {
    state: T;
    clone(): Prototype<T>;
}

export class ConcretePrototype1 implements Prototype<string> {
    public state: string = "";

    constructor (data: string) {
        this.state = data;
    }

    clone(): Prototype<string> {
        return new ConcretePrototype1(this.state);
    }
}

export class ConcretePrototype2 implements Prototype<number> {
    public state: number = 0;

    constructor (data: number) {
        this.state = data;
    }

    clone(): Prototype<number> {
        return new ConcretePrototype2(this.state);
    }
}

/**
 * We can also have a class to manipulate the prototypes if needed by
 * the particular use case. Here I use just a function.
 */
export function clientOperation<T>(prototype: Prototype<T>): T {
    let p = prototype.clone();
    return p.state;
}
