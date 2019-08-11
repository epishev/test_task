import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import CrewContainer from '../CrewContainer';
import Filters from '../Filters';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header data-test="header" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 data-test="header-title" className="App-title">OpenOceanStudio: Crew Applications</h1>
        </header>
        <Filters />
        <div data-test="crews-table-container" className="App-container">
          <div data-test="applied-column" className="App-column">
            <CrewContainer name="Applied" hiringStage="applied" />
          </div>
          <div data-test="interviewing-column" className="App-column">
            <CrewContainer name="Interviewing" hiringStage="interviewing" />
          </div>
          <div data-test="hired-column" className="App-column">
            <CrewContainer name="Hired" hiringStage="hired" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
