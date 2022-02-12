/**
 * When need to extends this interface, must modify the
 * concrete factories => I don't like it !!
 */
interface AbstractFactory {
    createProductA(): AbstractProduct
    createProductB(): AbstractProduct
}

class ConcreteFactory implements AbstractFactory {

    createProductA(): ProductA {
        return new ProductA()
    }

    createProductB(): ProductB {
        return new ProductB()
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