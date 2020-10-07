import React, { useState } from 'react';

class Ticket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({count: this.state.count+1})
    }

  render() {
    return (
        <div>
            <h2 className="title">{this.props.name}</h2>
            <button class='action-btn' onClick={this.increment}>Add</button>
            <h2 className="total">{this.state.count}</h2>
        </div>
    );
   
  }
}

export default Ticket;