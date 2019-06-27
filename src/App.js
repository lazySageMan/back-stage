import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import NewBlog from './views/New-blog'
import BlogList from './views/Blog-list'
import UserList from './views/User-list'
import './App.css'
function App() {
  return (
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
  )
}

export default App;
