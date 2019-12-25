

import React, { Component } from 'react'
export default class Footer extends Component {
  render () {
    return (
     



<footer className="footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-6 col-md-6 margin-b-30">
                        <h3>Opening hours</h3>
                        <p><span className='text-color'>Monday: </span>Closed</p>
              <p><span className='text-color'>Mon-Thu :</span> 4:00 PM - 9:00 PM</p>
              <p><span className='text-color'>Fri-Sat :</span> 4:00 PM - 10:00 PM</p>
              <p><span className='text-color'>Sunday :</span> 4:00 PM - 9:00 PM</p>
                    </div>
                    <div className="col-lg-6 col-md-6 margin-b-30">
                        <h3>Contact Us</h3>
                        <p className='lead'>
                968 Wyandotte St West <br />Windsor, Ontario N9E2G6
                        </p>
              <p className='lead'><a href='#'>519-252-6888</a></p>
              <p><a href='mailto:info@bugracuisine.com'>info@bugracuisine.com</a></p>
            </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <ul className="list-inline f-social">
                            <li className="list-inline-item"><a href="#"><i className="ion-social-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ion-social-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ion-social-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ion-social-googleplus"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ion-social-instagram"></i></a></li>
                        </ul>
                        <span>&copy; Copyright 2020. bugracuisine.com designed & developed by Tarim lab.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
