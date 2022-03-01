export class Subject<T> {
    observers: Array<Observer<T>> = [];
    state: T;

    constructor (initialState: T) {
        this.state = initialState;
    }

    public attach(o: Observer<T>) {
        this.observers.push(o);
    }

    public dettach(o: Observer<T>) {
        const i = this.observers.indexOf(o);
        if (i > -1) {
            this.observers.splice(i, 1);
        }
    }

    public notify() {
        this.observers.forEach(o => {
            o.update();
        });
    }

    public setState(newSt: T) {
        this.state = newSt;
        this.notify();
    }
}

export interface Observer<T> {
    subject: Subject<T>;
    update(): void;
}

/**
 * An example implementation of an observer.
 */
export class ConcreteObserver<T> implements Observer<T> {
    subject: Subject<T>;
    state: T;

    constructor (initialState: T, subject: Subject<T>) {
        this.state = initialState;
        this.subject = subject;
        subject.attach(this);
    }

    public update(): void {
        // just retrieves the new Subject state and stores it
        this.state = this.subject.state;
    }

}
