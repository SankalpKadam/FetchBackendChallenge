import { calculatePoints } from "../utils/calculatePoints"
import { v4 } from "uuid"
import { checkReceiptValidity } from "../utils/checkReceiptValidity"

//hashmap to store the receipts with points

const processTheReceipt = (req, res) => {
    // check if the receipt is valid
    if (!checkReceiptValidity()){
        return res.status(400).json({'description':"The receipt is invalid"})
    }

    // calculate points if the receipt is valid
}