import React from 'react'

export default function InputNew(props) {
    return (
        <input onChange={props.onChange} type = {props.type} className = {props.classDec} placeholder = {props.placeholder}>

        </input>
    )
}
