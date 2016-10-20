import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'
import ClientStore from '../stores/ClientStore'
import { Link } from 'react-router'

export default class EditClient extends Component {
  constructor() {
    super();
    this.state = {
      editClient: ClientStore.getClientToEdit()
    }
    this._onChange = this._onChange.bind(this)
    this.sendEditedClient = this.sendEditedClient.bind(this)
  }

  componentWillMount() {
    ClientStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    ClientStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      editClient: ClientStore.getClientToEdit()
    })
  }

  sendEditedClient(e) {
    e.preventDefault()
    const { firstName, lastName, phone, email, streetAddress, city, state, zip, note } = this.refs 
    let editedClient = {
      clientId: e.target.id,
      firstName: firstName.value || null,
      lastName: lastName.value || null,
      phone: phone.value || null,
      email: email.value || null,
      streetAddress: streetAddress.value || null,
      city: city.value || null,
      state: state.value || null,
      zip: zip.value || null,
      note: note.value || null
    }
    ToAPIActions.sendEditedClient(editedClient)
  }

  render() {

    const { editClient } = this.state

    if(editClient) {
      var firstName = editClient[0].firstName
      var lastName = editClient[0].lastName
      var phone = editClient[0].phone
      var email = editClient[0].email
      var streetAddress = editClient[0].streetAddress
      var city = editClient[0].city
      var state = editClient[0].state
      var zip = editClient[0].zip
      var note = editClient[0].note
      var clientId = editClient[0].clientId
    }

    return (
      <div className="mainContainer">
        {/*---- NAVBAR ----*/}
        <div className="navBar">
          <div className="logo">
            <p>FURBALL STALL</p>
          </div>
          <div className="links">
            <ul className='navUl'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/animals">Animals</Link></li>
            </ul>
          </div>
        </div>
        {/*---- SEARCH MOST RECENT ----*/}
        <div className="supportContainer">
          <div className="addClient">
            {/*---- SEARCH FORM ----*/}
            <form id={clientId} className="contactForm" onSubmit={this.sendEditedClient}>
              <div className="test">
                <h2 className="contactHeader">Edit This Client</h2>
                <p className="subHeader">If your edit is succesful you will be redirected to the clients' page</p>
              </div>
              <div className="test">
                <input ref='firstName' className="inputName" type="text" defaultValue={firstName} />
                <input ref='lastName' className="inputName" type="text" defaultValue={lastName} />
              </div>
              <div className="test">
                <input ref='phone' className="inputContact" type="text" defaultValue={phone} />
                <input ref='email' className="inputContact" type="text" defaultValue={email} />
              </div>
              <div className="test">
                <input ref='streetAddress' className="inputAddress" type="text" defaultValue={streetAddress} /> 
              </div>
              <div className="test">
                <input ref='city' className="addressTwo" type="text" defaultValue={city} />
                <input ref='state' className="addressTwo" type="text" defaultValue={state} />
                <input ref='zip' className="addressTwo" type="text" defaultValue={zip} />
              </div>
              <div className="test">
                <textarea ref='note' className="inputNote" rows='4' cols='50' defaultValue={note} /> 
              </div>
              <div className="test">
                <button id={clientId} type="submit" className='contactBtn'>Submit Client</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
