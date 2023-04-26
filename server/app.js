import express from "express"
const app=express()
import cors from "cors"
import bodyParser from "body-parser"
import checkOutRoute from "./routes/checkOut.js"
import {connection} from "./config/db.js"
app.use(cors())
app.use(bodyParser({extended:true}))
app.use(express.json())
app.use("/post",checkOutRoute)
const port=4000;
const start=async()=>{
 await connection
 app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
}
start()
