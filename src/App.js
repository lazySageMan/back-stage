import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './stores/index'
import Header from './components/Header'
import BlogList from './views/Blog-list'
import UserList from './views/User-list'
import AddBlog from './views/Add-blog'
import Modal from './components/Modal'
import UserLogin from './views/User-login'
import 'antd/dist/antd.css'
import './assets/scss/index.scss'

function App(props) {
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Modal />
					<Switch>
						<Route path='/' component={BlogList} exact />
						<Route path='/usr' component={UserList} exact />
						<Route path='/addblog' component={AddBlog} exact />
						<Route path='/login' component={UserLogin} exact />
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	)
}

export default App;
