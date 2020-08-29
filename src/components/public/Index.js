import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import HttpsRedirect from 'react-https-redirect'
import Menu from './Menu'
import About from './About'
import Home from './Home'
export default class Index extends Component {
  render () {
    return (
      <HttpsRedirect>
        <Header />
        <Home />
        <About />
        
        <Menu />
        <Contact />
        <Footer />
        <a href='#' className='scrollToTop'><i className='ion-android-arrow-up' /></a>
      </HttpsRedirect>
    )
  }
}
