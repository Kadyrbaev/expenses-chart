import { useState } from "react"
import Button from "./UI/Button"

const Form=(props)=>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [date, setdate] = useState("")

    const titleHandler=(e)=>{
        setTitle(e.target.value)
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const dateHandler=(e)=>{
        setdate(e.target.value)
    }

    const saveData=()=>{
        const obj = {
            title,
            price: price,
            date: new Date(date),
            id: Math.random()
        }
        console.log(obj);
        props.onGetData(obj)

    }

    const test=()=>{
        console.log("TEST");
    }
    const test2=()=>{
        console.log("TEST-2");
    }
    return (
        <div >
            <input onChange={titleHandler} placeholder="title"/>
            <input onChange={priceHandler} placeholder="price"/>
            <input onChange={dateHandler} type="date" />
            <button onClick={saveData}>ADD</button>
            <Button background="yellow" onClick={test} text="NO" />
            <Button background="green" onClick={test2} text="YES" />
            <Button background="red" text="CLICK" />
            <Button text="ADD" />
            <Button text="ADD" />
            <Button text="ADD" />
        </div>
    )
}
export default Form