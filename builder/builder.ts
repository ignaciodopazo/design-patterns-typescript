type A = { tag: "A", data: any }
type B = { tag: "B", data: any }
type C = { tag: "C", data: any }

// Token type
type Token = A | B | C

class Director {
    private structure: Array<Token>
    private builder: AbstractBuilder

    constructor (builder: AbstractBuilder, structure: Array<Token>) {
        this.structure = structure
        this.builder = builder
    }

    public construct() {
        this.structure.forEach(elem => {
            this.builder.buildPart(elem)
        })
    }

}

/**
 * Each concrete builder will have the buildPart method
 * implemented with its concrete mechanism to represent
 * each one of the tokens of the Director "structure".
 */
interface AbstractBuilder {
    buildPart(x: Token): void
}

class ConcreteBuilder1<R> implements AbstractBuilder {

    private result: R | undefined

    public buildPart(x: Token): void {
        switch (x.tag) {
            case "A":
                // representation of A
                break;
            case "B":
                // representation of B
                break;
            case "C":
                // representation of C
                break;
            default:
                throw new Error("bad token type");
        }
    }

    public getResult(): R | undefined {
        return this.result
    }

}

// Usage
let cb = new ConcreteBuilder1()
let structure: Array<Token> = []
let director = new Director(cb, structure)
director.construct()
let result = cb.getResult()

export default {}