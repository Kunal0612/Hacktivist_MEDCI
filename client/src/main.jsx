import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import "antd/dist/reset.css";
import {Provider} from 'react-redux' 
import {AuthContextProvider} from './context/authContext.jsx'
import store from './redux/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false}/>
        <App />
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  </Provider>
)
