import { AbstractDirector } from "../../../abstract/Builder/AbstractDirector";
import { AbstractProductBuilder } from "../builders/abstract/AbstractProductcBuilder";

class Director extends AbstractDirector<AbstractProductBuilder> {

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
                this.builder.addExclMarkDetail() }

                public makeDefault() {
                this.builder.addProductDetail()
                this.builder.addExclMarkDetail()

                }

    make(type?: string): void {

        // обновляем объект продукта в строителе до "пустого"
        this.builder.reset()

        // в зависимости от полученного типа конфигурируем продукт через вызов методов строителя
        switch (type) {
            case 'max':              
                break;
            case 'cool':
                break
            case 'awesome':
                break
            default:
                break;
        }
    }
    
}

export { Director }