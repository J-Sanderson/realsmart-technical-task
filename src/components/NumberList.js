import React from 'react'
import '../css/NumberList.css';

function NumberList(props) {

    const handleChange = (e) => {
        props.togglePending(props.type, parseInt(e.target.id), e.target.checked);
    }

    const numbers = props.numbers.length
        ? (
            props.numbers.map(number => {
                return (
                    <label className="item">
                        <input
                            key={number} 
                            type="checkbox" 
                            id={number} 
                            onChange={handleChange} 
                        />
                        <span className="box" />
                        <span className="label">{number}</span>
                    </label>
                );
            })
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
