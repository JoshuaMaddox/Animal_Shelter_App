import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'
import AnimalStore from '../stores/AnimalStore'
import { Link } from 'react-router'

export default class AllAnimals extends Component {
  constructor() {
    super();

    this.state = {
      allAnimals: AnimalStore.getAllAnimals()
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
      allAnimals: AnimalStore.getAllAnimals()
    })
  }


  sendAnimal(e){
    e.preventDefault()
    const { name, commonName, breed, description, imgurl, clientId } = this.refs 
    let newAnimal = {
      name: name.value || null,
      commonName: commonName.value || null,
      breed: breed.value || null,
      description: description.value || null,
      imgurl: imgurl.value || null,
      clientId: clientId.value || null
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

    const { allAnimals } = this.state
    let Animals;
    let searchElements = (
      <div className="searchInput">
        <input ref="searchAnimal" type="text" placeholder='Searh For a Animal by Name'/>
        <button type="submit" className='searchBtn' onClick={this.searchClient}>SEARCH</button>
      </div>
    )
 
    if(allAnimals){
      Animals = allAnimals.map((Animal, i) => {
        var { id, name, commonName, breed, description, clientId, age, imgurl } = Animal
        return ( 
          <div className="clientContainer" key={id}>
              <p className="clientItem">Animal Name: {name}</p>
              <p className="clientItem">{clientId ? "You're Late to the Table: Dish Has Been Eaten" : 'Order This Dish.'}</p>
              <p className="clientItem">Dish Name: {commonName}</p>
              <p className="clientItem">Meat Type: {breed}</p>
              <p className="clientItem">{description}</p>
              <p className="clientItem">{imgurl}</p>
              <p className="clientItem">Client Id: {clientId}</p>
              <div className="clientBtns">
                <button onClick={this.editAnimal} id={id} className="clientEditBtn">Order Dish</button>
                <button onClick={this.deleteAnimal} id={id} className="clientEditBtn">Dump Dish</button>
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
            <Link to={'/'}>FURBALL STALL</Link>
          </div>
          <div className="links">
            <ul className='navUl'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/clients">Clients</Link></li>
            </ul>
          </div>
        </div>

        {/*---- SEARCH MOST RECENT ----*/}
        <div className="supportContainer">
          <div className="editClient">
            {/*---- SEARCH FORM ----*/}
            <form className="contactForm" onSubmit={this.sendAnimal}>
              <div className="test">
                <h2 className="contactHeader">Add a Dish</h2>
                <p className="subHeader">Upon submission a new Dish will be added to your database</p>
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
                <input ref='clientId' className="inputAddress" type="text" placeholder="clientId" /> 
              </div>
              <div className="test">
                <textarea ref='description' className="inputNote" rows='4' cols='50' placeholder="Add a description of the animal" /> 
              </div>
              <div className="test">
                <button type="submit" className='contactBtn'>Submit Dish</button>
              </div>
            </form>
          </div>
        </div>
      {/*---- SEARCH MOST RECENT ----*/}
      <div className="clientSep">
        <div className="sepText">
          <h2>View All Dishes</h2>
        </div>
      </div>
        <div className='mainAnimalContainer'>
          {Animals} 
        </div>
      </div>
    )
  }
}
