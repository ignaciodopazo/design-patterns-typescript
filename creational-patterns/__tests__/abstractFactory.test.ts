import "jest";

import { ConcreteFactory, ProductA, ProductB } from "../abstractFactory"


test("Check if products have their expected state.", () => {
    let cf = new ConcreteFactory()
    let pA = cf.createProductA()
    let pB = cf.createProductB()
    expect(pA.someMethod()).toBe("ProductA");
    expect(pB.someMethod()).toBe("ProductB");
});
