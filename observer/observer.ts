
abstract class Subject {
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
    private state: any
    private subject: Subject

    constructor (subject: Subject, initialSt: any) {
        this.state = initialSt;
        this.subject = subject
    }

    public getState(): any {
        return this.state;
    }

    public setState(newSt: any) {
        this.state = newSt;
    }

    public update(): void {
        let x = this.subject.getState()
        // do something with the new subject state
        x = x
    }

}


export default {}