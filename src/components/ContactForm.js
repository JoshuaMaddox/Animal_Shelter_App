import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="formContainer">
        <form className="contactForm">
         <div className="test">
            <input className="inputName" type="text" placeholder="First Name" />
            <input className="inputName" type="text" placeholder="Last Name" />
         </div>
         <div className="test">
            <input className="inputContact" type="text" placeholder="Phone" />
            <input className="inputContact" type="text" placeholder="Email" />
          </div>
          <div className="test">
            <input className="inputAddress" type="text" placeholder="Address" /> 
          </div>
          <div className="test">
            <input className="addressTwo" type="text" placeholder="City" />
            <input className="addressTwo" type="text" placeholder="State" />
            <input className="addressTwo" type="text" placeholder="Zip" />
          </div>
        </form>
      </div>
    )
  }
}
