import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './stores/index'
import Header from './components/Header'
import NewBlog from './views/New-blog'
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
            <Route path='/' component={NewBlog} exact />
            <Route path='/usr' component={UserList} />
            <Route path='/bloglist' component={BlogList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
