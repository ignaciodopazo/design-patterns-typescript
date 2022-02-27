class Subject {
    private observers: Array<Observer> = []
    private state: any

    public attach(o: Observer) {
        this.observers.push(o);
    }

    public dettach(o: Observer) {
        const i = this.observers.indexOf(o)
        if (i > -1) {
            this.observers.splice(i, 1);
        }
    }

    public notify() {
        this.observers.forEach(o => {
            o.update();
        });
    }

    public getState(): any {
        return this.state;
    }

    public setState(newSt: any) {
        this.state = newSt;
    }
}

interface Observer {
    update(): void
}

class ConcreteObserver implements Observer {
    private subject: Subject

    constructor (subject: Subject) {
        this.subject = subject
        subject.attach(this)
    }

    public update(): void {
        let x = this.subject.getState()
        // do something with the new subject state
    }

}

// Usage
let s = new Subject()
let o1 = new ConcreteObserver(s)
let o2 = new ConcreteObserver(s)
s.notify()

export default {}