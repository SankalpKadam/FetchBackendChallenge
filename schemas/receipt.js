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
            return False
        }
        const retailerPattern = /^[\w\s\-&]+$/;
        return retailerPattern.test(retailer);
    }

    #validatePurchaseDate(purchaseDate) {
        if (typeof purchaseDate !== 'string') {
            return False
        }
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        return datePattern.test(purchaseDate)
    }

    #validatePurchaseTime(purchaseTime) {
        if (typeof purchaseTime !== 'string') {
            return False
        }
        const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
        return timePattern.test(purchaseTime);
    }

    #validateTotal(total) {
        if (typeof total !== 'string') {
            return False
        }
        const totalPattern = /^\d+\.\d{2}$/;
        return totalPattern.test(total)
    }

    #validateItems(itemsArray){
        if (!Array.isArray(itemsArray) || itemsArray.length < 1) {
            return False
        }
        itemsArray.forEach(item => {
            if(!Items.validateItem(item)){
                return False
            }
        });
    }

    static validateReceipt(receipt){
        const receiptInstance = new Receipt(receipt)
        return receiptInstance.#validateRetailer(receiptInstance.retailer) &&
        receiptInstance.#validatePurchaseDate(receiptInstance.purchaseDate) &&
        receiptInstance.#validatePurchaseTime(receiptInstance.purchaseTime) &&
        receiptInstance.#validateTotal(receiptInstance.total) &&
        receiptInstance.#validateItems(receiptInstance.items)
    }
}