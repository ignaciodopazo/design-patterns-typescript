import "jest";

import { ConcretePrototype1, ConcretePrototype2, clientOperation } from "../prototype";


test("The ConcretePrototype1 state is correct.", () => {
    let cp1 = new ConcretePrototype1("CP1");
    let st = clientOperation(cp1);
    expect(st).toBe("CP1");
});

test("The ConcretePrototype2 state is correct.", () => {
    let cp2 = new ConcretePrototype2(0);
    let st = clientOperation(cp2);
    expect(st).toBe(0);
});
