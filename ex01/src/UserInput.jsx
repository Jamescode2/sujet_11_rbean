import React from 'react';

const UserInput = (props) => {
    return (
        <input type="text" value={props.value} onChange={props.handleChange}/>
    )
}

export default UserInput;