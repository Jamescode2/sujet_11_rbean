import React from 'react';
import ReactDOM from 'react-dom';

import Preview from './Preview';
import UserInput from './UserInput';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedValue: ''};
    }

    handleChange = (event) => {
        this.setState({ selectedValue: event.currentTarget.value })
    }

    render() {
        return (
            <div>
                <Preview selectedValue={this.state.selectedValue} />
                <UserInput value={this.state.selectedValue} handleChange={this.handleChange} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));