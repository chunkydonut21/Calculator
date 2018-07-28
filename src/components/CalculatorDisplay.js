import React from 'react';

export default class CalculatorDisplay extends React.Component {
  render() {
    return (
      <div id="display" className="display-wrap">
        {this.props.value}
      </div>
    );
  }
}