import React from 'react';

const Suggestions = (props) => {
    let tab = [];
    for (let i = 0; i < props.auteur.length; i++) {
        let test = props.auteur[i].slice(0,props.value.length).toUpperCase() == props.value.toUpperCase();
        if (test) {
            tab.push(<li key={props.auteur[i]}>{props.auteur[i]}</li>);
        }
    }
    return (
        <ul>
            {tab}
        </ul>
    )
}

export default Suggestions;