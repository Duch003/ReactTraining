import React from 'react'

const extraDiv = (props) => {
    return (
        <div onClick={props.click} style={{height: 200, width: 200, backgroundColor: props.color}}>
            <input type="text" onChange={props.change} value={props.color}/>
        </div>
    )
}

export default extraDiv;