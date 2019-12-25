import React, { Component } from 'react'
export default class Header extends Component {
  render () {
    return (
      <header className="header header-top-transparent">
      <div className="top-bar">
          <div className="container">
              <div className="row">
                  <div className="col-sm-6 hidden-sm-down">
                      <ul className="list-inline">
                          <li className="list-inline-item"><a href="#"><i className="ion-ios-telephone"></i> 519-252-6888</a></li>
                          <li className="list-inline-item"><a href="mailto:reservation@bugracuisine.com"><i className="ion-email"></i> Reservation@bugracuisine.com</a></li>
                      </ul>
                  </div>
                  
              </div>
          </div>
      </div>
      <nav className="navbar navbar-light navbar-expand-lg navbar-static-top sticky-header">
          <div className="container">                   
              <div className="navbar-header">
                  <button type="button" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right collapsed" data-toggle="collapse" data-target="#navbarNavDropdown" aria-expanded="false" aria-controls="navbarNavDropdown">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <a className="navbar-brand" href="index.html">
                      <img src="assets/images/bugra-45.png" alt="Bugra" className="logo-default"/>
                      <img src="assets/images/bugra-d-45.png" alt="Bugra" className="logo-scroll"/>
                  </a>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                          <a href="#home" className="nav-link" >Home </a>
                      </li>
                      <li className="nav-item">
                          <a href="#menu" className="nav-link" >Menu </a>
                      </li>
                      <li className="nav-item">
                          <a href="#about" className="nav-link" >About US</a>
                      </li>
                      <li className="nav-item">
                          <a href="#contact" className="nav-link" >Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
    )
  }

}
