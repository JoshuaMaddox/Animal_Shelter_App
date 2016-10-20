import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'
import AnimalStore from '../stores/AnimalStore'
import { Link } from 'react-router'

export default class AllAnimals extends Component {
  constructor() {
    super();

    this.state = {
      allAnimals: AnimalStore.getAllAnimals(),
      singleClient: AnimalStore.getSingleAnimal()
    }

    this._onChange = this._onChange.bind(this)
    this.editAnimal = this.editAnimal.bind(this)
    this.sendAnimal = this.sendAnimal.bind(this)
    this.searchAnimal = this.searchAnimal.bind(this)
    this.deleteAnimal = this.deleteAnimal.bind(this)
  }

  componentWillMount() {
    ToAPIActions.getAnimals()
    AnimalStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      allAnimals: AnimalStore.getAllAnimals(),
      singleClient: AnimalStore.getSingleAnimal()
    })
  }


  sendAnimal(e){
    e.preventDefault()
    const { name, commonName, breed, description, imgurl, clientId, age } = this.refs 
    let newAnimal = {
      name: name.value,
      commonName: commonName.value,
      breed: breed.value,
      description: description.value,
      imgurl: streetAddress.value,
      clientId: city.value,
      age: state.value
    }
    ToAPIActions.sendNewAnimal(newAnimal)
  }

  searchAnimal(e) {
    const { searchAnimal } = this.refs
    let searchName = searchAnimal.value
    ToAPIActions.searchAnimal(searchName)
  }

  deleteAnimal(e) {
    let id = e.target.id
    ToAPIActions.deleteAnimal(id)
  }

  editAnimal(e) {
    let id = e.target.id
    ToAPIActions.editAnimal(id)
  }


  render() {

    const { allAnimals, singleAnimal } = this.state
    let Animals;
    let singleAnimalResults;
    let searchElements = (
      <div className="searchInput">
        <input ref="searchAnimal" type="text" placeholder='Searh For a Animal by Name'/>
        <button type="submit" className='searchBtn' onClick={this.searchClient}>SEARCH</button>
      </div>
    )
    if(singleAnimal) {
      console.log('I am singleAnimal', singleAnimal)
      singleAnimalResults  = ( 
          <div className="AnimalContainer" key={singleAnimal[0].AnimalId}>
              <p className="AnimalItem">{singleAnimal[0].firstName + ' ' + singleAnimal[0].lastName}</p>
              <p className="AnimalItem">{singleAnimal[0].phone}</p>
              <p className="AnimalItem">{singleAnimal[0].streetAddress + ' ' + singleAnimal[0].city + ' ' + singleAnimal[0].state  + ' ' + singleAnimal[0].zip}</p>
              <p className="AnimalItem">{singleAnimal[0].email}</p>
              <p className="AnimalItem">{singleAnimal[0].note}</p>
              <div className="AnimalBtns">
                <button onClick={this.editAnimal} id={singleAnimal[0].AnimalId} className="AnimalEditBtn">Edit Animal</button>
                <button onClick={this.deleteAnimal} id={singleAnimal[0].AnimalId} className="AnimalEditBtn">Delete Animal</button>
              </div>
          </div> 
      ) 
    }

    if(allAnimals){
      console.log('allAnimals have arrived in AllAnimals.js: ', allAnimals)
      Animals = allAnimals.map((Animal, i) => {
        var { AnimalId, firstName, lastName, phone, streetAddress, city, email, state, zip, note} = Animal
        return ( 
          <div className="AnimalContainer" key={AnimalId}>
              <p className="AnimalItem">{firstName + ' ' + lastName}</p>
              <p className="AnimalItem">{phone}</p>
              <p className="AnimalItem">{streetAddress + ' ' + city + ' ' + state  + ' ' + zip}</p>
              <p className="AnimalItem">{email}</p>
              <p className="AnimalItem">{note}</p>
              <div className="AnimalBtns">
                <button onClick={this.editAnimal} id={AnimalId} className="AnimalEditBtn">Edit Animal</button>
                <button onClick={this.deleteAnimal} id={AnimalId} className="AnimalEditBtn">Delete Animal</button>
              </div>
          </div> 
        ) 
      })
    } else {
      Animals = <div></div>
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
          <div className="addAnimal">
            {/*---- SEARCH FORM ----*/}
            <form className="contactForm" onSubmit={this.sendAnimal}>
              <div className="test">
                <h2 className="contactHeader">Add A Animal</h2>
                <p className="subHeader">Upon submission a new Animal will be added to your database</p>
              </div>
              <div className="test">
                <input ref='name' className="inputName" type="text" placeholder="Animal Name" />
                <input ref='commonName' className="inputName" type="text" placeholder="Common Name" />
              </div>
              <div className="test">
                <input ref='breed' className="inputContact" type="text" placeholder="breed" />
                <input ref='imgurl' className="inputContact" type="text" placeholder="Animal Image URL" />
              </div>
              <div className="test">
                <input ref='age' className="inputAddress" type="number" /> 
                <input ref='clientId' className="inputAddress" type="text" placeholder="clientId" /> 
              </div>
              <div className="test">
                <textarea ref='description' className="inputNote" rows='4' cols='50' placeholder="Add a description of the animal" /> 
              </div>
              <div className="test">
                <button type="submit" className='contactBtn'>Submit Animal</button>
              </div>
            </form>
          </div>
          <div className="searchAnimal">
            <div className="searchInput">
              {singleAnimal ? singleAnimalResults : searchElements}
            </div>
          </div>
        </div>
      {/*---- SEARCH MOST RECENT ----*/}
      <div className="Animalsep">
        <div className="sepText">
          <h2>View Animal List</h2>
        </div>
      </div>
        <div className='mainAnimalContainer'>
          {Animals} 
        </div>
      </div>
    )
  }
}
