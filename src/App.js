import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Reducer from './stores/index'
import Header from './components/Header'
import NewBlog from './views/New-blog'
import BlogList from './views/Blog-list'
import UserList from './views/User-list'
import 'antd/dist/antd.css';
import './assets/scss/index.scss'

import productsReducer from './stores/modules/header'

function App() {
  const productsInitState = { products: [] }; // 初始化状态
  const [pState, pDispatch] = React.useReducer(productsReducer, productsInitState);

  const ContextStore = React.createContext({
    products: []
  });
  // 将ContextStore暴露到全局
  window.ContextStore = ContextStore;

  return (
    <ContextStore.Provider value={{
      pState,
      pDispatch
    }}>
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
    </ContextStore.Provider> 
  )
}

export default App;
