interface Prototype {
    num: number;
    clone(): Prototype;
    operation(): void;
}

class ConcretePrototype1 implements Prototype {
    public num: number = 0;

    public clone(): Prototype {
        return new ConcretePrototype1();
    }

    public operation(): number {
        this.num += 1;
        return this.num;
    }
}

class ConcretePrototype2 implements Prototype {
    public num: number = 0;

    public clone(): Prototype {
        return new ConcretePrototype2();
    }

    public operation(): number {
        this.num -= 1;
        return this.num;
    }
}

/**
 * We can also have a class to manipulate the prototypes if needed by
 * the particular use case.
 */
function clientOperation(aPrototype: Prototype): {p: Prototype, x: number} {
    let p = aPrototype.clone();
    p.operation();
    let x = p.num;
    return {p, x};
}


// Usage
let cp1 = new ConcretePrototype1();
let {p, x} = clientOperation(cp1);

let cp2 = new ConcretePrototype2();
let {p: cp2_, x: num} = clientOperation(cp2);
