import { Receipt } from "../schemas/Receipt";
// checks validity of receipt using the receipt schema
export const checkReceiptValidity = (receipt) => {
    return Receipt.validateReceipt(receipt)
}