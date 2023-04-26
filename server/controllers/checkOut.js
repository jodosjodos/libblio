import { log } from "console";
import {connection} from "../config/db.js"

export const checkout=(req,res)=>{
  const {situation,quantity,ISBN,author,bookTitle,date,role,names}=req.body
 const sql="INSERT INTO checkOut (names,role,date,bookTitle,author,ISBN,quantity,situation) VALUES(?,?,?,?,?,?,?,?)"

  
  connection.query(sql,[names,role,date,bookTitle,author,ISBN,quantity,situation],(err,results)=>{
    if(err){
        console.log(err);
    }else{
        console.log(results);
        res.send("your data have been saved")
    }
  })
}
// module.exports={checkout}