import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'
import AnimalStore from '../stores/AnimalStore'
import { Link } from 'react-router'

export default class EditClient extends Component {
  constructor() {
    super();
    this.state = {
      editAnimal: AnimalStore.getAnimalToEdit()
    }
    this._onChange = this._onChange.bind(this)
    this.sendEditedAnimal = this.sendEditedAnimal.bind(this)
  }

  componentWillMount() {
    AnimalStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      editAnimal: AnimalStore.getAnimalToEdit()
    })
  }


  sendEditedAnimal(e) {
    e.preventDefault()
    const { name, commonName, breed, description, imgurl, clientId, age } = this.refs 
    let editedAnimal= {
      id: e.target.id,
      name: name.value || null,
      commonName: commonName.value || null,
      breed: breed.value || null,
      description: description.value || null,
      imgurl: imgurl.value || null,
      clientId: clientId.value || null
    }
    ToAPIActions.sendEditedAnimal(editedAnimal)
  }

  render() {

    const { editAnimal } = this.state

    if(editAnimal) {
      var id = editAnimal[0].id
      var name = editAnimal[0].name
      var commonName = editAnimal[0].commonName
      var breed = editAnimal[0].breed
      var description = editAnimal[0].description
      var imgurl = editAnimal[0].imgurl
      var clientId = editAnimal[0].clientId
    }

    return (
      <div className="mainContainer">
        {/*---- NAVBAR ----*/}
        <div className="navBar">
          <div className="logo">
            <Link to={'/'}>FURBALL STALL</Link>
          </div>
          <div className="links">
            <ul className='navUl'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/animals">Animals</Link></li>
              <li><Link to="/clients">clients</Link></li>
            </ul>
          </div>
        </div>
        {/*---- SEARCH MOST RECENT ----*/}
        <div className="supportContainer">
          <div className="editClient">
            {/*---- SEARCH FORM ----*/}
            <form className="contactForm" id={id} onSubmit={this.sendEditedAnimal}>
              <div className="test">
                <h2 className="contactHeader">Edit Dish</h2>
                <p className="subHeader">Upon submission you'll be taken back to the menu</p>
              </div>
              <div className="test">
                <input ref='name' className="inputName" type="text" defaultValue={name} />
                <input ref='commonName' className="inputName" type="text" defaultValue={commonName} />
              </div>
              <div className="test">
                <input ref='breed' className="inputContact" type="text" defaultValue={breed} />
                <input ref='imgurl' className="inputContact" type="text" defaultValue={imgurl} />
              </div>
              <div className="test">
                {clientId ? <input ref='clientId' className="inputAddress" type="text" value={`LATE TO THE TABLE: Dish enjoyed by client ${clientId}`} placeholder='client id' readOnly/> : <input ref='clientId' className="inputAddress" type="text" defaultValue={clientId} placeholder='client id' /> }
              </div>
              <div className="test">
                <textarea ref='description' className="inputNote" rows='4' cols='50' defaultValue={description} /> 
              </div>
              <div className="test">
                <button type="submit" className='contactBtn'>Submit Dish</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
