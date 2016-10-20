import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'


export default class ContactForm extends Component {
  constructor() {
    super();
    this.sendClient = this.sendClient.bind(this)
  }

  sendClient(e){
    e.preventDefault()
    const { firstName, lastName, phone, email, streetAddress, city, state, zip } = this.refs 
    let newClient = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      streetAddress: streetAddress.value,
      city: city.value,
      state: state.value,
      zip: zip.value
    }
    ToAPIActions.sendNewClient(newClient)
  }

  render() {

    return (
      <div className="formContainer">
        <form className="contactForm" onSubmit={this.sendClient}>
          <div className="test">
            <h2 className="contactHeader">Get A Menu Sent To Your Email</h2>
            <p className="subHeader">From poodles and noodles to teriyaki terrier, we deliver fresh meals daily.</p>
          </div>
         <div className="test">
            <input ref='firstName' className="inputName" type="text" placeholder="First Name" />
            <input ref='lastName' className="inputName" type="text" placeholder="Last Name" />
         </div>
         <div className="test">
            <input ref='phone' className="inputContact" type="text" placeholder="Phone" />
            <input ref='email' className="inputContact" type="text" placeholder="Email" />
          </div>
          <div className="test">
            <input ref='streetAddress' className="inputAddress" type="text" placeholder="Address" /> 
          </div>
          <div className="test">
            <input ref='city' className="addressTwo" type="text" placeholder="City" />
            <input ref='state' className="addressTwo" type="text" placeholder="State" />
            <input ref='zip' className="addressTwo" type="text" placeholder="Zip" />
          </div>
          <div className="test">
            <button type="submit" className='contactBtn'>Chow a Chow Chow Now</button>
          </div>
        </form>
      </div>
    )
  }
}
