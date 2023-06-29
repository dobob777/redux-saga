import React, { useState } from 'react'
import { addObj } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'

const Das = () => {
    const dis = useDispatch()
    const selector = useSelector((data) => { return data })
    console.log('selector::: ', selector);
    const obj = {
        name: 'tech',
        age: '589014'
    }
    return (
        <>
            <div>
                <p>{ selector.toDoReducer.length }</p>
                <button onClick={ () => dis(addObj(obj)) }>Click</button>
                <br />
                <br />
                <button>Get Data</button>
            </div>
        </>
    )
}

export default Das