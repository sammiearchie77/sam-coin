import React, {Component} from 'react';
import Today from './Today/Today';
import History from './History/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Sam-Coins</span>
              </div>
              <div className="navbar-end">
                <a className="navbar-item" href="https://sam-coins.com" target="_blank" rel="noopener noreferrer">Sam-coin.com</a>
              </div>
            </nav>
          </header>
        </div>

        <section className="results--section">
          <div className="container">
            <h1>Sam-Coins is a realtime price information about <br /> BTC, ETH, and LTC.</h1>
          </div>
          <div className="results--section__inner">
            <Today />
            <History />
          </div>
        </section>
      </div>
    )
  }
}

export default App;
