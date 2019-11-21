import React from 'react'


export default function List(props) {
    return (
        <ul className ="listCont">
            <li>{props.display}</li>
        </ul>
    )
}
