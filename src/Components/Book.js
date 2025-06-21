import './Book.css'
import React from 'react'
import { useState } from 'react';
import { Taras } from './Taras'

export function Book(props){
    let [theme, setTheme] = React.useState('radio')
    let themeChange = (e) => {
        if(e.target.value == 'stRadio'){
            setTheme('stRadio')
        }else if(e.target.value == 'radio'){
            setTheme('radio')
        }
    }
    return (
    <div className='main'>

        <div id={theme}>
            <span>Dark</span>
            <input type='radio' name='radio' onChange={themeChange} value = 'stRadio'></input>
            <span>Light</span>
            <input type='radio' name='radio' onChange={themeChange} value = 'radio'></input>
            <Taras></Taras>
        </div>

    </div>
    );
}