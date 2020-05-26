import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from "./MainApp.js";


class App extends Component {
	constructor(props) {
        super(props); // Must call
		this.state = {show: "MainApp"};
    }

    // Renders component based on current state and props
    render() {
		switch (this.state.show) {
            case 'MainApp':
                return <MainApp />;
                break;
            default:
                return <h2>Some type of problem!</h2>;
				break;
        }
	}
}

export default App;
