import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'
import ClientStore from '../stores/ClientStore'
import { Link } from 'react-router'

export default class AllClients extends Component {
  constructor() {
    super();

    this.state = {
      allClients: ClientStore.getAllClients(),
      singleClient: ClientStore.getSingleClients()
    }

    this._onChange = this._onChange.bind(this)
    this.editClient = this.editClient.bind(this)
    this.sendClient = this.sendClient.bind(this)
    this.searchClient = this.searchClient.bind(this)
    this.deleteClient = this.deleteClient.bind(this)
  }

  componentWillMount() {
    ToAPIActions.getClients()
    ClientStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    ClientStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      allClients: ClientStore.getAllClients(),
      singleClient: ClientStore.getSingleClients()
    })
  }

  sendClient(e){
    e.preventDefault()
    const { firstName, lastName, phone, email, streetAddress, city, state, zip, note } = this.refs 
    let newClient = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      streetAddress: streetAddress.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      note: note.value
    }
    ToAPIActions.sendNewClient(newClient)
  }

  searchClient(e) {
    const { searchClient } = this.refs
    let searchName = searchClient.value
    ToAPIActions.searchClient(searchName)
  }

  deleteClient(e) {
    let id = e.target.id
    ToAPIActions.deleteClient(id)
  }

  editClient(e) {
    let id = e.target.id
    ToAPIActions.editClient(id)
  }


  render() {

    const { allClients, singleClient } = this.state
    let clients;
    let singleClientResults;
    let searchElements = (
      <div className="searchInput">
        <input ref="searchClient" type="text" placeholder='Searh For a Client by Name'/>
        <button type="submit" className='searchBtn' onClick={this.searchClient}>SEARCH</button>
      </div>
    )
    if(singleClient) {
      console.log('I am singleClient', singleClient)
      singleClientResults  = ( 
          <div className="clientContainer" key={singleClient[0].clientId}>
              <p className="clientItem">{singleClient[0].firstName + ' ' + singleClient[0].lastName}</p>
              <p className="clientItem">{singleClient[0].phone}</p>
              <p className="clientItem">{singleClient[0].streetAddress + ' ' + singleClient[0].city + ' ' + singleClient[0].state  + ' ' + singleClient[0].zip}</p>
              <p className="clientItem">{singleClient[0].email}</p>
              <p className="clientItem">{singleClient[0].note}</p>
              <div className="clientBtns">
                <button onClick={this.editClient} id={singleClient[0].clientId} className="clientEditBtn">Edit Client</button>
                <button onClick={this.deleteClient} id={singleClient[0].clientId} className="clientEditBtn">Delete Client</button>
              </div>
          </div> 
      ) 
    }

    if(allClients){
      console.log('allClients have arrived in AllClients.js: ', allClients)
      clients = allClients.map((client, i) => {
        var { clientId, firstName, lastName, phone, streetAddress, city, email, state, zip, note} = client
        return ( 
          <div className="clientContainer" key={clientId}>
              <p className="clientItem">{firstName + ' ' + lastName}</p>
              <p className="clientItem">{phone}</p>
              <p className="clientItem">{streetAddress + ' ' + city + ' ' + state  + ' ' + zip}</p>
              <p className="clientItem">{email}</p>
              <p className="clientItem">{note}</p>
              <div className="clientBtns">
                <button onClick={this.editClient} id={clientId} className="clientEditBtn">Edit Client</button>
                <button onClick={this.deleteClient} id={clientId} className="clientEditBtn">Delete Client</button>
              </div>
          </div> 
        ) 
      })
    } else {
      clients = <div></div>
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
            <form className="contactForm" onSubmit={this.sendClient}>
              <div className="test">
                <h2 className="contactHeader">Add A Client</h2>
                <p className="subHeader">Upon submission a new client will be added to your database</p>
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
                <textarea ref='note' className="inputNote" rows='4' cols='50' placeholder="ADD CLIENT NOTES" /> 
              </div>
              <div className="test">
                <button type="submit" className='contactBtn'>Submit Client</button>
              </div>
            </form>
          </div>
          <div className="searchClient">
            <div className="searchInput">
              {singleClient ? singleClientResults : searchElements}
            </div>
          </div>
        </div>
      {/*---- SEARCH MOST RECENT ----*/}
      <div className="clientSep">
        <div className="sepText">
          <h2>View Client List</h2>
        </div>
      </div>
        <div className='mainClientContainer'>
          {clients} 
        </div>
      </div>
    )
  }
}
