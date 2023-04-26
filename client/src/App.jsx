
import Axios from "axios"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import "./App.css"
 


function App() {
  const schema=yup.object().shape({
     names:yup.string().required().min(1),
     role:yup.string().required(),
     date:yup.date().required(),
     bookTitle:yup.string().required(),
     author:yup.string().required(),
     ISBN:yup.string().required(), 
     quantity:yup.number().required(),
     situation:yup.string().required()

  })
  const {register,handleSubmit}=useForm(
    {resolver:yupResolver(schema)}
  )

  const sendSubmit=(data)=>{
// console.log(data);
Axios.post("http://localhost:4000/post",data).then((res)=>{
  console.log(res);
}).catch((err)=>{console.log(err)})
  }
  return (
    <>
     <form action="" onSubmit={handleSubmit(sendSubmit)}>
      <label htmlFor="names">enter full names: </label>
      <input type="text" name="names" id="names" {...register("names")}  className="input" placeholder="full name"/>
      <br/>
      <label htmlFor="role">enter ur role: </label>
      <input type="text" name="role" id="role" {...register("role")}  className="input" placeholder="student or stuff or others"/><br/>
      <label htmlFor="date">enter date: </label>
      <input type="date" name="date" id="date"  {...register("date")} className="input" placeholder="enter time u have borrowed book"/><br/>
      <label htmlFor="bookTitle">bookTitle: </label>
      <input type="text" name="bookTitle" id="bookTitle" {...register("bookTitle")} placeholder="book title" className="input"/><br/>
      <label htmlFor="author">enter author: </label>
      <input type="text" name="author" {...register("author")} className="input" placeholder="author of bookd"/><br/>
      <label htmlFor="ISBN">enter book ISBN: </label>
      <input type="" name="ISBN" id="ISBN" {...register("ISBN")} className="input" placeholder="ISBN  of book"/><br/>
      <label htmlFor="quantity">quantity: </label>
      <input type="text" name="quantity" id="quantity" {...register("quantity")} placeholder="nber  of books u borrosed" className="input"/><br/>
      <label htmlFor="status">Status : </label>
      <br/>
      <label htmlFor="good">good </label>
        <input type="radio" name="situation" value="Good" id="good" {...register("situation")}/>
        <label htmlFor="damaged">damaged</label>
        <input type="radio" name="situation" value="damaged" id="damaged"{...register("situtation")} /><br/>
      <button type="submit" className="submitButton">Done</button>
      <button  className="submitButton">clear</button>
    </form> 
    </>
  )
}

export default App
