
/**
 * Now to extend the factory we don't need to modify
 * AbstractFactory, just update the make implementation
 * of the given ConcreteFactory.
 */
interface AbstractFactory {
    make(tag: string): AbstractProduct
}

class ConcreteFactory implements AbstractFactory {

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


export default {}
