import React from 'react';
import './Preview.css';

const Preview = (props) => {
    let value;
    if (props.selectedValue) {
        value = <div className='Preview HasSelection'>You have currently selected the {props.selectedValue} level!</div>;
    } else {
        value = <div className='Preview'>You haven't made your selection yet.</div>;
    }
    return (
        <>
            {value}
        </>
    )
}

export default Preview;