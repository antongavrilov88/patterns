class DetailsList {
    value: string
    constructor() {
        this.value = ''
    }

    private setValue(additionalValue: string) {
        const currentValue = this.value
        this.value = currentValue + ' ' + additionalValue
    }

    public addCoolDetail() {
        this.setValue('Cool detail')
    }

    public addAwsomeDetail() {
        this.setValue('Awsome detail')
    }

    public addProductDetail() {
        this.setValue('product detail')
    }

    public addExclMarkDetail() {
        this.setValue('! detail')
    }
}

export { DetailsList }