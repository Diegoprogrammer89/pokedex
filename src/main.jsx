import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// React Router:
import { HashRouter } from 'react-router-dom'
// Redux:
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
