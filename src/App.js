import { useState } from 'react';
// import styles from './App.module.css';
// import Expense from './components/Expense';
// import { styled } from 'styled-components';
// // import Button from './components/UI/Button';

function App() {

  // const [isValid, setIsValid] = useState(false)
  // console.log(isValid);

  // const changeState=()=>{
  //   setIsValid(!isValid)
  // }

  // const classText = isValid ? styles.red : styles.blue
  // const test = isValid ? "red" : "blue"

  const [counter , setCounter] = useState(0)

  return (
    <>
    <button onClick={() => setCounter(counter + 1)} >+</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter - 1)} >-</button>
    </>
    // <div className={{color: isValid ? "red" : "blue"}} >
    //   <Expense/>
    //   <h1 className={classText}>HELLO</h1>
    //   <button onClick={changeState}>CLICK</button>

    //   <Button2 color={test}>HELLLO H2</Button2>
    //   <Button2>CLICK</Button2>
    // </div>
  );
}

export default App;


// export const Button = styled.button`
//   color: ${(props)=>props.color};
//   padding: 14px 70px;

// `
// export const Button2 = styled.button`
//   color: blue;
//   padding: 10px 40px;
//   border-radius: 20px;
//   font-size: 20px;
//   background-color: green;
//   color: white;
// `
