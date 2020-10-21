import React from 'react'
import '../css/NumberList.css';

function NumberList(props) {

    const handleChange = (e) => {
        props.togglePending(props.type, e.target.id, e.target.checked);
    }

    const numbers = props.numbers.length
        ? (
            <ul>
                {
                    props.numbers.map(number => {
                        return (
                            <li key={number}>
                                <label>
                                    <input type="checkbox" id={number} onChange={handleChange} />
                                    <span>{number}</span>
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        )
        : (<p>There are no numbers</p>)
    return (
        <div className="number-list">
            <h2>{props.type} numbers</h2>
            <div>
                { numbers }
            </div>
        </div>
    )
}

export default NumberList
