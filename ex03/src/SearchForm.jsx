import React from 'react';

const SearchForm = (props) => {
    console.log(props.value);
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" value={props.value} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;