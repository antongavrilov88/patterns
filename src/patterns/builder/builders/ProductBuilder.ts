import { DetailsList } from "../products/DetailsList";
import { AbstractProductBuilder } from "./abstract/AbstractProductcBuilder";

class DetailsListBuilder extends AbstractProductBuilder {
    product: DetailsList
    constructor() {
        super();
        this.product = new DetailsList()
    }

    reset() {
        this.product = new DetailsList()
    }

    public addCoolDetail() {
        this.product.addCoolDetail()
    }

    public addAwsomeDetail() {
        this.product.addAwsomeDetail()
    }

    public addProductDetail() {
        this.product.addProductDetail()
    }

    public addExclMarkDetail() {
        this.product.addExclMarkDetail()
    }

    getResult(): DetailsList {
        return this.product
    }
}

export { DetailsListBuilder }