import React from 'react';

export default class CalculatorDisplay extends React.Component {
  render() {
    return (
      <div className="display-wrap">
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}