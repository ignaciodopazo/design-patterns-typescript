import "jest";

import { Subject, Observer, ConcreteObserver } from "../observer";

test("Create two observers.", () => {
    let s = new Subject<number>(0);
    new ConcreteObserver<number>(-1, s);
    expect(s.observers.length).toBe(1);
    new ConcreteObserver<number>(1, s);
    expect(s.observers.length).toBe(2);
});

test("Create and attach/dettach to subject some observers.", () => {
    let s = new Subject<number>(0);
    let o1 = new ConcreteObserver<number>(-1, s)
    let o2 = new ConcreteObserver<number>(1, s)
    expect(s.observers.length).toBe(2);
    s.dettach(o1);
    expect(s.observers.length).toBe(1);
    s.dettach(o2);
    expect(s.observers.length).toBe(0);
});

test("Update subject state thus it notifies observers.", () => {
    let s = new Subject<string>("");
    let o1 = new ConcreteObserver<string>("", s)
    let o2 = new ConcreteObserver<string>("", s)
    s.setState("a");
    expect(o1.state).toBe("a");
    expect(o2.state).toBe("a");
});
