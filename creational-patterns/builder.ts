type A = { tag: "A", data: any };
type B = { tag: "B", data: any };
type C = { tag: "C", data: any };

function createA(data: any): A {
    return {tag: "A", data};
}

function createB(data: any): B {
    return {tag: "B", data};
}

function createC(data: any): C {
    return {tag: "C", data};
}


// Token type
export type Token = A | B | C

export class Director {
    private structure: Array<Token>;
    private builder: AbstractBuilder;

    constructor (builder: AbstractBuilder, structure: Array<Token>) {
        this.structure = structure;
        this.builder = builder;
    }

    public construct() {
        this.structure.forEach(elem => {
            this.builder.buildPart(elem);
        })
    }

}

/**
 * Each concrete builder will have the buildPart method
 * implemented with its concrete mechanism to represent
 * each one of the tokens of the Director "structure".
 */
export interface AbstractBuilder {
    buildPart(x: Token): void;
}

/**
 * An example implementation of a builder.
 */
export class ConcreteBuilder implements AbstractBuilder {

    private result: string = "";

    public buildPart(x: Token): void {
        switch (x.tag) {
            case "A":
                this.result += "A";
                break;
            case "B":
                this.result += "B";
                break;
            case "C":
                this.result += "C";
                break;
            default:
                throw new Error("bad token type");
        }
    }

    public getResult(): string {
        return this.result;
    }

}
