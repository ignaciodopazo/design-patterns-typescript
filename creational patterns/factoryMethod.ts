
interface AbstractCreator {
    // The factory method
    make(tag: string): AbstractProduct
}

class ConcreteCreator implements AbstractCreator {

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

class ProductA implements AbstractProduct {
    private state: any

    constructor() {
        this.state = undefined
    }

    someMethod() {}
}

class ProductB implements AbstractProduct {
    private state: any

    constructor() {
        this.state = undefined
    }

    someMethod() {}
}

// Usage
let cf = new ConcreteCreator()
let pA = cf.make("ProductA")
let pB = cf.make("ProductB")

export default {}
