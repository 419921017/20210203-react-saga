import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../store/actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.counter.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.asyncIncrement}>+async</button>
        <button onClick={this.props.stop}>stop</button>
      </div>
    );
  }
}

export default connect((state) => state, actions)(Counter);
