import React, { Component } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loadingImg from './img/loading.gif';
import rouletteWheelImg from './img/wheel.svg';
import './App.css';

class App extends Component {
  state = {
    framework: null,
    isLoading: false
  }

  getFramework = async () => await fetch('/api/framework');

  showSpinner() {
    return <img width="160" height="120" src={loadingImg} alt="Loading..." />;
  }

  showFramework() {
    if (this.state.framework) {
      return <h2 className="Heading-framework">{this.state.framework}</h2>;
    }

    if (this.state.framework === null) {
      return null;
    }

    return <div className="Error-message">
      <h3>Sorry, we were unable to retrieve a framework</h3>
      <button className="Button" onClick={this.handleClick}>Spin Again</button>
    </div>;
  }

  handleClick = () => {
    this.retrieveFramework();
  }

  retrieveFramework() {
    this.setState({isLoading: true});

    this.getFramework()
      .then(res => {
        if (res.status !== 200) {
          throw Error(res.statusText || 'An error occurred');
        }

        return res.json();
      })
      .then(res => {
        this.setState({
          framework: res.framework,
          isLoading: false
        });
      })
      .catch(e => {
        toast.error('An error occurred while retrieving a framework. Please try again.');
        this.setState({isLoading: false});
      });
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <img src={rouletteWheelImg} alt="Roulette" className="Routlette-image" />
          <div className="App-intro">
            <h1 className="App-title">JavaScript Framework Roulette</h1>
            <button className="Button" onClick={this.handleClick}>Spin that Wheel</button>
          </div>
        </header>
        {this.state.isLoading ? this.showSpinner() : this.showFramework()}
      </div>
    );
  }
}

export default App;
