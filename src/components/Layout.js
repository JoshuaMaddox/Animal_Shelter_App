import React, { Component } from 'react'
import { Link } from 'react-router'
import ContactForm from './ContactForm'
import CurrentPets from './CurrentPets'



export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <div className="navRow">
          <h3 className="brand">FURBALL STALL</h3>
          <div className="navBtn">
            <Link to={'/clients'}>Animals</Link>
          </div>
          <div className="navBtn">
            <Link to={'/clients'}>Clients</Link>
          </div>
        </div>
        <div className="mainImg">
          <div className="backImg">
            <div className="innerDiv">
              <h2 className='bannerText'>Don't support factory farming when you can get fresh meat daily from furball stall's network of animal shelters.</h2>
              <input className="middleInput" placeholder="DO GOOD. EAT WELL."></input>
            </div>
          </div>
        </div>
        <div className="displayRow">
          <ContactForm />
          <CurrentPets />
        </div>
      </div>
    )
  }
}
