import { PriceList } from "../products/PriceList";
import { AbstractProductBuilder } from "./abstract/AbstractProductcBuilder";

class PriceListBuilder extends AbstractProductBuilder  {
    product: PriceList;
    constructor() {
        super();
        this.product = new PriceList()
    }

    reset() {
        this.product = new PriceList()
    }

    public addCoolDetail() {
        this.product.addCoolDetailPrice()
    }

    public addAwsomeDetail() {
        this.product.addAwsomeDetailPrice()
    }

    public addProductDetail() {
        this.product.addProductDetailPrice()
    }

    public addExclMarkDetail() {
        this.product.addExclMarkDetailPrice()
    }

    getResult() {
        return this.product
    }
}

export { PriceListBuilder }