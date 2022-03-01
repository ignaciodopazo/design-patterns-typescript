interface AbstractCreator {
    // The factory method
    make(tag: string): AbstractProduct
}

export class ConcreteCreator implements AbstractCreator {

    make(tag: string): AbstractProduct {
        switch (tag) {
            case "ProductA":
                return new ProductA()
            case "ProductB":
                return new ProductB()
            default:
                throw new Error("Bad tag argument");
            }
        }

}

interface AbstractProduct {
    someMethod(): void
}

export class ProductA implements AbstractProduct {
    private state: number

    constructor() {
        this.state = 0;
    }

    someMethod(): number {
        return this.state;
    }
}

export class ProductB implements AbstractProduct {
    private state: number

    constructor() {
        this.state = 1;
    }

    someMethod(): number {
        return this.state;
    }
}
