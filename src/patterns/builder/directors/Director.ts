import { AbstractDirector } from "../../../abstract/Builder/AbstractDirector";
import { AbstractProductBuilder } from "../builders/abstract/AbstractProductcBuilder";

class Director extends AbstractDirector<AbstractProductBuilder> {
    make(type?: string): void {
        throw new Error("Method not implemented.");
    }

    constructor(builder: AbstractProductBuilder) {
        super(builder);
        this.builder = builder
    }

    public makeMax() {
        this.builder.addAwsomeDetail()
        this.builder.addCoolDetail()
        this.builder.addProductDetail()
        this.builder.addExclMarkDetail()  

    }

    public makeCool() {
        this.builder.addCoolDetail()
        this.builder.addProductDetail()
        this.builder.addExclMarkDetail()

    }

    public makeAwesome() {
        this.builder.addAwsomeDetail()
        this.builder.addProductDetail()
        this.builder.addExclMarkDetail()
    }

    public makeDefault() {
        this.builder.addProductDetail()
        this.builder.addExclMarkDetail()
    }
    
}

export { Director }