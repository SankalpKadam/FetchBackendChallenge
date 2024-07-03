import express from 'express'
import processTheReceipt, { getPointsForReceipt } from '../controllers/receiptProcessor.js'
const router = express.Router()

// post route for processing the receipt
router.post('/process', processTheReceipt)

// get route to the points for the receipts
router.get('/:id/points', getPointsForReceipt)

export default router;