export class Items {
    constructor(item) {
        this.shortDescription = item.shortDescription
        this.price = item.price
    }
    //private methods to validate each field
    #validateShortDescription(shortDescription){
        if (typeof shortDescription !== 'string') {
            return false 
        }
        const shortDescriptionPattern = /^[\w\s\-]+$/
        return shortDescriptionPattern.test(shortDescription)
    }

    #validatePrice(price) {
        if (typeof price !== 'string') {
            return false
        }
        const pricePattern = /^\d+\.\d{2}$/;
        return pricePattern.test(price)
    }

    static validateItem(item){
        const itemInstance = new Items(item)
        return itemInstance.#validatePrice(itemInstance.price) && itemInstance.#validateShortDescription(itemInstance.shortDescription)
    }
}