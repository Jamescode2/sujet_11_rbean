import React from 'react';

const RevenueBox = (props) => {
    return (
        <p>Total revenue ($):  {props.investissement * props.interet/100}</p>
    )
}

export default RevenueBox;