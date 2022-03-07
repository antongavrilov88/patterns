import { AbstractDirector } from "../../../abstract/Builder/AbstractDirector";
import { AbstractProductBuilder } from "../builders/abstract/AbstractProductcBuilder";

class Director extends AbstractDirector<AbstractProductBuilder> {

    constructor(builder: AbstractProductBuilder) {
        super(builder);
        this.builder = builder
    }

    make(type?: string): void {

        // обновляем объект продукта в строителе до "пустого"
        this.builder.reset()

        // в зависимости от полученного типа конфигурируем продукт через вызов методов строителя
        switch (type) {
            case 'max':
                this.builder.addAwsomeDetail()
                this.builder.addCoolDetail()
                this.builder.addProductDetail()
                this.builder.addExclMarkDetail()                
                break;
            case 'cool':
                this.builder.addCoolDetail()
                this.builder.addProductDetail()
                this.builder.addExclMarkDetail()
                break
            case 'awesome':
                this.builder.addAwsomeDetail()
                this.builder.addProductDetail()
                this.builder.addExclMarkDetail() 
                break
            default:
                this.builder.addProductDetail()
                this.builder.addExclMarkDetail()
                break;
        }
    }
    
}

export { Director }