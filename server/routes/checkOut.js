import express from "express"
import { checkout } from "../controllers/checkOut.js"
  const Route=express.Router()
Route.route("/").post(checkout)
// export Routee
export default Route