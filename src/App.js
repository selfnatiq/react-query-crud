import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useQuery } from 'react-query'

import Header from './components/Header'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import NotFound from './components/NotFound.jsx'
import Loader from './components/Loader'
import { setAuthToken } from './api'

const App = () => {
	useEffect(() => {
		setAuthToken()
	}, [])

	return (
		<Router>
			<Header />
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/create" component={Create} />
					<Route path="/update" component={Update} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
