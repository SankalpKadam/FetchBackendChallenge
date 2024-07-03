import { Items } from "./items.js";
export class Receipt {
    constructor(receipt) {
        this.retailer = receipt.retailer;
        this.purchaseDate = receipt.purchaseDate;
        this.purchaseTime = receipt.purchaseTime;
        this.items = receipt.items;
        this.total = receipt.total
    }
    //private methods to validate each field
    #validateRetailer(retailer) {
        if (typeof retailer !== 'string') {
            return false
        }
        const retailerPattern = /^[\w\s\-&]+$/;
        return retailerPattern.test(retailer);
    }

    #validatePurchaseDate(purchaseDate) {
        if (typeof purchaseDate !== 'string') {
            return false
        }
        // const datePattern = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        // return datePattern.test(purchaseDate)
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!datePattern.test(purchaseDate)) return false;
        const date = new Date(purchaseDate);
        return !isNaN(date.getTime()) && date.toISOString().startsWith(purchaseDate);
    }

    #validatePurchaseTime(purchaseTime) {
        if (typeof purchaseTime !== 'string') {
            return false
        }
        const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
        return timePattern.test(purchaseTime);
    }

    #validateTotal(total) {
        if (typeof total !== 'string') {
            return false
        }
        const totalPattern = /^\d+\.\d{2}$/;
        return totalPattern.test(total)
    }

    #validateItems(itemsArray) {
        if (!Array.isArray(itemsArray) || itemsArray.length < 1) {
            return false
        }
        for (const item of itemsArray) {
            if(!Items.validateItem(item)){
                return false
            }
        }
        return true
    }

    static validateReceipt(receipt) {
        const receiptInstance = new Receipt(receipt)

        if (!receiptInstance.#validateRetailer(receiptInstance.retailer)) return false

        if (!receiptInstance.#validatePurchaseDate(receiptInstance.purchaseDate)) return false

        if (!receiptInstance.#validatePurchaseTime(receiptInstance.purchaseTime)) return false

        if (!receiptInstance.#validateTotal(receiptInstance.total)) return false

        if (!receiptInstance.#validateItems(receiptInstance.items)) return false

        return true
    }
}