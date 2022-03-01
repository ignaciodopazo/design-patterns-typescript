import "jest";

import { ConcreteCreator, ProductA, ProductB } from "../factoryMethod";


test("Check if products have their expected state.", () => {
    let cf = new ConcreteCreator();
    let pA = cf.make("ProductA")
    let pB = cf.make("ProductB")
    expect(pA.someMethod()).toBe(0);
    expect(pB.someMethod()).toBe(1);
});
