import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import { hot } from "react-hot-loader";

import TagCloundContainer from "./containers/TagCloudContainer";
import TagDetailsContainer from "./containers/TagDetailsContainer";

const mapStateToProps = state => {
	return {
		settings: state.settings
	};
};

class App extends Component {
	render() {

		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={TagCloundContainer}/>				
					<Route path="/:id" component={TagDetailsContainer}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default hot(module)(connect(mapStateToProps)(App));
