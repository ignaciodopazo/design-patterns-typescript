import "jest";

import { Director, ConcreteBuilder, Token } from "../builder";


test("Build parts and check its result.", () => {
    let b = new ConcreteBuilder()
    let structure: Array<Token> = [
        { tag: "A", data: undefined },
        { tag: "B", data: undefined },
        { tag: "C", data: undefined },
        { tag: "B", data: undefined },
        { tag: "A", data: undefined }
    ]
    let director = new Director(b, structure);
    director.construct();
    expect(b.getResult()).toBe("ABCBA")
});
