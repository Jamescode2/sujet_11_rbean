import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <input className='marg' type="text" value={props.value} onChange={props.handleChange} />
    )
}

export default UserInput;