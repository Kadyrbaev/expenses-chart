
import React from 'react'
import { styled } from 'styled-components'

const Button = (props) => {
  return (
    <ButtonStyle test={props.background} onClick={props.onClick}>{props.text}</ButtonStyle>
  )
}

export default Button


const ButtonStyle = styled.button`
    background-color: ${(props)=> props.test || "red"};
    padding: 10px 30px;
`