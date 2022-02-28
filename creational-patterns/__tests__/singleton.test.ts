import "jest"

import { Singleton, singleton } from "../singleton";

new Singleton(0, (x: number) => x);

test("Try to create another Singleton.", () => {
    new Singleton(1, (x: number) => x);
    expect(Singleton.getInstance()).toBe(0);
});

test("Update Singleton instance.", () => {
    Singleton.updateInstance((x) => x += 1);
    expect(Singleton.getInstance()).toBe(1);
});

test("Update singleton object", () => {
    singleton.theObject = 2;
    expect(singleton.theObject).toBe(2);
});
