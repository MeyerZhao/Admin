import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import './index.css';
import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Repos from './routes/Repos';
import Repo from './routes/Repo';


ReactDOM.render((
	<Router historty={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path='/repos' component={Repos}>
				<IndexRoute component={Home}/>
				<Route path="/repos/:userName/:repoName" component={Repo}></Route>
			</Route>
			<Route path='/about' component={About}></Route>
		</Route>
	</Router>	
), document.getElementById('root'));

