import React from 'react';
import ReactDOM from 'react-dom';

import RevenueBox from './RevenueBox';
import UserInput from './UserInput';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            investissement: '',
            interet: ''
        };
    }

    handleChange = (event) => {
        this.setState({ investissement: event.currentTarget.value })
    }

    handleChange2 = (event) => {
        this.setState({ interet: event.currentTarget.value })
    }
    render() {
        return (
            <div>
                <label>Initial amount ($):  </label>
                <UserInput value={this.state.investissement} handleChange={this.handleChange} />
                <label>Interest (%):  </label>
                <UserInput value={this.state.interet} handleChange={this.handleChange2} />
                <RevenueBox investissement={this.state.investissement} interet={this.state.interet}/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));