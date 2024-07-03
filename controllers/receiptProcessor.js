import { calculatePoints } from "../utils/calculatePoints.js"
import { v4 } from "uuid"
import { checkReceiptValidity } from "../utils/checkReceiptValidity.js"

//hashmap to store the receipts with points
const receipts = new Map()


const processTheReceipt = (req, res) => {
    // check if the receipt is valid
    if (!checkReceiptValidity(req.body)){
        return res.status(400).json({'description':"The receipt is invalid"})
    }

    // calculate points if the receipt is valid
    const points = calculatePoints(req.body)

    if (points === null) {
        return res.status(400).json({'description':"The point calculation was not successful"})
    }
    
    const id = v4()
    receipts.set(id, points)
    return res.status(200).json({'id' :`${id}`})
}

const getPointsForReceipt = (req, res) => {
    const {id} = req.params

    //get Receipt points
    const receiptPoints = receipts.get(id)

    if (!receiptPoints) {
        return res.status(400).json({'description':'No receipt found for that id'})
    }

    return res.status(200).json({'points':receiptPoints})
}

export default processTheReceipt
export {getPointsForReceipt}