import React from 'react';
import Header from './Header';
import CalculatorDisplay from './CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayValue: '0' };
  }

  handleInput = (input) => {
    this.setState({ 
      displayValue: this.state.displayValue === '0' ? String(input) : this.state.displayValue + String(input)
    });
  }

  handleClear = () => {
    this.setState({ displayValue: '0' });
  }

  handleDot = () => {
    const { displayValue } = this.state;
    if(displayValue.indexOf('.') === -1) {
      this.setState({ displayValue: this.state.displayValue + '.' }); 
    }
  }

  handleToggle = () => {
    const { displayValue } = this.state;
    displayValue.charAt(0) === '-' ? this.setState({ displayValue: displayValue.substr(1)}) : this.setState({ displayValue: '-' + displayValue});
  }

  handlePercent = () => {
    const { displayValue } = this.state;
    this.setState({ displayValue: String(parseFloat(displayValue)/100) });
  }
 
  render() {
    return (
      <div id="wrap">
        <Header />
        <div id="inner">
          <CalculatorDisplay value={this.state.displayValue} />
          <button className="button button-dark" onClick={() => this.handleClear()}>AC</button>
          <button className="button button-dark" onClick={() => this.handleToggle()}>±</button>
          <button className="button button-dark" onClick={() => this.handlePercent()}>%</button>
          <button className="button button-orange">/</button>
          <button className="button button-light" onClick={() => this.handleInput(7)}>7</button>
          <button className="button button-light" onClick={() => this.handleInput(8)}>8</button>
          <button className="button button-light" onClick={() => this.handleInput(9)}>9</button>
          <button className="button button-orange">x</button>
          <button className="button button-light" onClick={() => this.handleInput(4)}>4</button>
          <button className="button button-light" onClick={() => this.handleInput(5)}>5</button>
          <button className="button button-light" onClick={() => this.handleInput(6)}>6</button>
          <button className="button button-orange">-</button>
          <button className="button button-light" onClick={() => this.handleInput(1)}>1</button>
          <button className="button button-light" onClick={() => this.handleInput(2)}>2</button>
          <button className="button button-light" onClick={() => this.handleInput(3)}>3</button>
          <button className="button button-orange">+</button>
          <button className="button button-light" style={{ flex: 2 }} onClick={() => this.handleInput(0)}>0</button>
          <button className="button button-light" onClick={() => this.handleDot()}>.</button>
          <button className="button button-orange">=</button>
        </div>
      </div>
    );
  }
}

export default App;
