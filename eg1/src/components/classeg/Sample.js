import React from "react";

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick = () => this.setState({ counter: this.state.counter + 1 });
  /**Other than constructor wherever u are setting state make use of setState */

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h1>counter:{this.state.counter}</h1>
      </div>
    );
  }
}
