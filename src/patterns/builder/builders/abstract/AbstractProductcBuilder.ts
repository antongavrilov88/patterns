import { AbstractBuilder } from "../../../../abstract/Builder/AbstractBuilder";
import { DetailsList } from "../../products/DetailsList";
import { PriceList } from "../../products/PriceList";

abstract class AbstractProductBuilder extends AbstractBuilder<PriceList | DetailsList> {
    public addCoolDetail() {}

    public addAwsomeDetail() {}

    public addProductDetail() {}

    public addExclMarkDetail() {}
}

export { AbstractProductBuilder }