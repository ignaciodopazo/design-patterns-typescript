import "jest";

import { SingletonFactory } from "../singletonFactory";

new SingletonFactory();

test("Try to create another Singleton with same id.", () => {
    let id = Symbol("singleton1");
    SingletonFactory.createSingleton(id, "ini", (x) => x+"t");
    SingletonFactory.createSingleton(id, "INI", (x) => x+"T");
    expect(SingletonFactory.getSingleton(id)?.getInstance()).toBe("init");
});

test("Update Singleton.", () => {
    let id = Symbol("singleton1");
    SingletonFactory.createSingleton(id, "ab", (x) => x+"cd");
    SingletonFactory.updateSingleton(id, (x: string) => x.toUpperCase());
    expect(SingletonFactory.getSingleton(id)?.getInstance()).toBe("ABCD");
});
