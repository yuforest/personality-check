// import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Check from 'views/pages/check/Check'
import Home from 'views/pages/home/Home'
import Result from 'views/pages/result/Result'
import Header from 'views/components/layout/Header'
import Footer from 'views/components/layout/Footer'

function App() {
  return (
    <ChakraProvider>
      <div className="page-container">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/check" component={Check} />
          <Route path="/result" component={Result} />
          <Footer />
        </Router>
      </div>
    </ChakraProvider>
  )
}

export default App
