import express from "express";
import { receipts } from "./examples/examples.js";
import router from "./routes/routes.js";
const app = express();
const port = 3000;
app.use(express.json())


// app.get('/', (req, res) => {
//     res.send(receipts)
// })
app.use('/receipts',router)
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})