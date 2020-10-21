import React from 'react'

function NumberList(props) {
    const numbers = props.numbers.length
        ? (
            <ul>
                {
                    props.numbers.map(number => {
                        return (
                            <li key={number}>{number}</li>
                        );
                    })
                }
            </ul>
        )
        : (<p>There are no numbers</p>)
    return (
        <div>
            <h2>{props.title}</h2>
            { numbers }
        </div>
    )
}

export default NumberList
