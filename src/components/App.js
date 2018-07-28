import React from 'react';
import Header from './Header';
import CalculatorDisplay from './CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayValue: '0', value: 0, operatorPressed: false, operator: null };
  }

  handleInput = (input) => {
    if(this.state.operatorPressed) {
      this.setState({
        displayValue: String(input),
        operatorPressed: false
      });
    } else {
      this.setState({
        displayValue: this.state.displayValue === '0' ? String(input) : this.state.displayValue + String(input)
      });
    }
  }

  handleClear = () => {
    this.setState({ displayValue: '0' });
  }

  handleDot = () => {
    const { displayValue } = this.state;
    if(this.state.operatorPressed) {
      this.setState({ displayValue: '.', operatorPressed: false });
    } else if(displayValue.indexOf('.') === -1) {
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

  handleOperation = (nextOperator) => {    
    const { value, displayValue, operator } = this.state;

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if (operator == null) {
      this.setState({
        value: parseFloat(displayValue)
      })
    } else if (operator) {
      const newValue = operations[operator](value || 0, parseFloat(displayValue));
      
      this.setState({
        value: newValue,
        displayValue: String(newValue)
      });
    }
    
    this.setState({
      operatorPressed: true,
      operator: nextOperator
    });
  }
  
  render() {
    return (
      <div id="wrap">
        <Header />
        <div id="inner">
          <CalculatorDisplay value={this.state.displayValue} />
          <button className="button button-dark" id="clear" onClick={() => this.handleClear()}>AC</button>
          <button className="button button-dark" onClick={() => this.handleToggle()}>±</button>
          <button className="button button-dark" onClick={() => this.handlePercent()}>%</button>
          <button className="button button-orange" id="divide" onClick={() => this.handleOperation('/')}>/</button>
          <button className="button button-light" id="seven" onClick={() => this.handleInput(7)}>7</button>
          <button className="button button-light" id="eight" onClick={() => this.handleInput(8)}>8</button>
          <button className="button button-light" id="nine" onClick={() => this.handleInput(9)}>9</button>
          <button className="button button-orange" id="multiply" onClick={() => this.handleOperation('*')}>x</button>
          <button className="button button-light" id="four" onClick={() => this.handleInput(4)}>4</button>
          <button className="button button-light" id="five" onClick={() => this.handleInput(5)}>5</button>
          <button className="button button-light" id="six" onClick={() => this.handleInput(6)}>6</button>
          <button className="button button-orange" id="subtract" onClick={() => this.handleOperation('-')}>-</button>
          <button className="button button-light" id="one" onClick={() => this.handleInput(1)}>1</button>
          <button className="button button-light" id="two" onClick={() => this.handleInput(2)}>2</button>
          <button className="button button-light" id="three" onClick={() => this.handleInput(3)}>3</button>
          <button className="button button-orange" id="add"  onClick={() => this.handleOperation('+')}>+</button>
          <button className="button button-light" style={{ flex: 2 }} id="zero" onClick={() => this.handleInput(0)}>0</button>
          <button className="button button-light" id="decimal" onClick={() => this.handleDot()}>.</button>
          <button className="button button-orange" id="equals" onClick={() => this.handleOperation('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
