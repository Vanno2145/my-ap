import React, { useState } from "react"

function ClickElem(props){
    return <div><h1>{props.elem}</h1></div>
}

function PlusTen(props){
    let plusten = () => props.setcl(props.elem + 10)

    return(
        <button onClick={plusten}>+10</button>
    )
}

function MinusFive(props){
    let minusfive = () => props.setcl(props.elem - 5)

    return(
        <button onClick={minusfive}>-5</button>
    )
}

function MultByTwo(props){
    let multbytwo = () => props.setcl(props.elem * 2)

    return(
        <button onClick={multbytwo}>*2</button>
    )
}

function Clicker() {
    let [click, setClick] = React.useState(0)

    let clickFunc = (e) => setClick(click +1)
    return (
        <div>
            <ClickElem elem = {click}></ClickElem>
            <PlusTen elem = {click} setcl = {setClick}/>
            <MinusFive elem = {click} setcl = {setClick}/>
            <MultByTwo elem = {click} setcl = {setClick}/>
        </div>
    )
}

export default Clicker
