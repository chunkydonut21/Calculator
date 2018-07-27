import React from 'react';
import Header from './Header';
import CalculatorDisplay from './CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrap">
        <Header />
        <div id="inner">
          <CalculatorDisplay />
          <button className="button button-dark">AC</button>
          <button className="button button-dark">±</button>
          <button className="button button-dark">%</button>
          <button className="button button-orange">/</button>
          <button className="button button-light">7</button>
          <button className="button button-light">8</button>
          <button className="button button-light">9</button>
          <button className="button button-orange">x</button>
          <button className="button button-light">4</button>
          <button className="button button-light">5</button>
          <button className="button button-light">6</button>
          <button className="button button-orange">-</button>
          <button className="button button-light">1</button>
          <button className="button button-light">2</button>
          <button className="button button-light">3</button>
          <button className="button button-orange">+</button>
          <button className="button button-light" style={{ flex: 2 }}>0</button>
          <button className="button button-light">.</button>
          <button className="button button-orange">=</button>
        </div>
      </div>
    );
  }
}

export default App;
