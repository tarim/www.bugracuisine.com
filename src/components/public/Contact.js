import React, { Component } from 'react'
// import { Link, IndexLink } from 'react-router'
export default class Contact extends Component {
  render () {
    return (
      <section id='contact'>
        <div className='container-fluid no-padd contact-wrapper'>
          <div className='row vertical-align-child no-margin'>
            <div className='col-md-8 no-padd'>
              <div className='google-map-container'>
                <div id='googlemaps' style={{ 'width':'100%', 'height': '400px' }} />
              </div>
            </div>
            <div className='col-md-4 no-padd address-bg'>
              <h3>Our Location</h3>
              <ul className='list-unstyled'>
                <li>968 Wyandotte St West</li>
                <li>Windsor, Ontario N9E2G6</li>
                <li>Phone 519-252-6888</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='space-10' />

      </section>
      
    )
  }
}
