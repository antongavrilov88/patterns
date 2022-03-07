class PriceList {
    value: string
    constructor() {
        this.value = ''
    }

    private setValue(additionalValue: number) {
        const currentValue = this.value
        this.value = currentValue + ' ' + additionalValue + 'руб'
    }

    public addCoolDetailPrice() {
        this.setValue(10)
    }

    public addAwsomeDetailPrice() {
        this.setValue(20)
    }

    public addProductDetailPrice() {
        this.setValue(30)
    }

    public addExclMarkDetailPrice() {
        this.setValue(40)
    }
}

export { PriceList }