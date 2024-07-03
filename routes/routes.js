import express from 'express'

const router = express.Router()

// post route for processing the receipt
router.post('/process',(req, res)=>{
    res.send('processing receipts')
})

// get route to the points for the receipts
router.get('/:id/points', (req, res) => {
    res.send("32")
})

export default router;