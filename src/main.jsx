import React from 'react'
import ReactDOM from 'react-dom/client'

import {MainPage} from './pages/MainPage'
import { Header } from './components/Header'
import { Quote } from './components/Quote'
import { Footer } from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <Header/>
    <MainPage/>
    {/* <Det /> */}
    {/* <Quote/> */}
    <Footer/>
  </>

)
