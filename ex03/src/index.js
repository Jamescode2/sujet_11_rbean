import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './SearchForm';
import Suggestions from './Suggestions';
import authors from './authorsList';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: '' };
    }
    handleChange = (event) => {
        this.setState({ searchValue: event.currentTarget.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('You are searching for '+this.state.searchValue);
    }

    render(){
        return(
            <div>
                <SearchForm value={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Suggestions auteur={this.props.data} value={this.state.searchValue}/>
            </div>
        )
    }
}

ReactDOM.render(<App data={authors} />, document.getElementById('root'));