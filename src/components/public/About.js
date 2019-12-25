import React, { Component } from 'react'
// import { Link, IndexLink } from 'react-router'
export default class About extends Component {
  render () {
    return (
      <section className='overflow-hidden' id='about'>
        <div className='space-70' />
        <div className='container'>
          <div className='row vertical-align-child'>
            <div className='col-md-8 text-center'>
              <h1 className='title-1'>Welcome to <span className='text-color '>Bugra Uyghur Cuisine</span></h1>
              <h5 className='subtitle'>Our Little Story</h5>
              <div className='space-30' />
              <p>
              Sultan Satuq Bugra(Bughra) Khan Ghazi was a Kara-Khanid khan; in 934, he was one of the first Turkic rulers to convert to Islam, 
              which prompted his Kara-Khanid subjects to convert. There are different historical accounts of the Satuq's life with some variations.
                        </p>
              <blockquote>
                            Uyghur cuisine is an original memorial to the culture of the people. It synthesizes influences of
                            the West and East, antiquity and the present, great skill, imagination, beauty and harmony of taste.
                             Here we’d like to introduce some of the meals that are the most popular among the Uyghurs.

                        </blockquote>
              <div className='space-30' />
            </div>
            <div className='col-md-4'>
              <img src='/assets/images/satukbugra.png' alt='' className='img-responsive' />
            </div>
          </div>
        </div>
        <div className='space-70' />
      </section>
    )
  }
}
