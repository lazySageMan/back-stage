import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './stores/index'
import Header from './components/Header'
import BlogList from './views/Blog-list'
import UserList from './views/User-list'
import 'antd/dist/antd.css';
import './assets/scss/index.scss'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' component={BlogList} exact />
            <Route path='/usr' component={UserList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
