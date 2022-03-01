/**
 * When need to extends this interface, must modify the
 * concrete factories => I don't like it !!
 */
interface AbstractFactory {
    createProductA(): AbstractProduct;
    createProductB(): AbstractProduct;
}

export class ConcreteFactory implements AbstractFactory {

    createProductA(): ProductA {
        return new ProductA();
    }

    createProductB(): ProductB {
        return new ProductB();
    }
}

interface AbstractProduct {
    someMethod(): void;
}

export class ProductA implements AbstractProduct {
    private state: string;

    constructor() {
        this.state = "ProductA";
    }

    someMethod(): string {
        return this.state;
    }
}

export class ProductB implements AbstractProduct {
    private state: string;

    constructor() {
        this.state = "ProductB";
    }

    someMethod(): string {
        return this.state;
    }
}
