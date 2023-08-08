import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Form from "./Form"
import { styled } from "styled-components"
import { Button } from "../App"

const Expense=()=>{

    const expense = [
        {
            title: "obed",
            price: 500,
            date: new Date('2023,3,4'),
            id: 's1'
        },
        {
            title: "zavtrak",
            price: 300,
            date: new Date('2022,8,8'),
            id: 's2'
        },
        {
            title: "ujin",
            price: 700,
            date: new Date('2022,9,9'),
            id: 's3'
        },
    ]
    const [state, setState] = useState(expense)



    const getData=(data)=>{
        setState((prevState)=>{
            return [...prevState,data]  // [[{},{},{}],{}]
        })  
    }

    const test = "test"

    return (
        <div>
            <Testh1>TEST</Testh1>
            <Form onGetData={getData} />
            {
                state.map((el)=>(
                    <ExpenseItem 
                        key={el.id} 
                        title={el.title} 
                        price={el.price} 
                        date={el.date}
                    />
                ))
            }

            <Container>
                <span>SPAN</span>
                <input type="text" />
            <Button>ADD</Button>
            </Container>
        </div>
    )
}
export default Expense

const Testh1 = styled.h1`
    color: blue;
`

const Container = styled.div`
    border: 2px solid red;
    input{
        padding: 20px;
    }
`

