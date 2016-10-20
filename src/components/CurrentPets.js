import React, { Component } from 'react'
import AnimalStore from '../stores/AnimalStore'
import ToAPIActions from '../actions/ToAPIActions'

export default class CurrentPets extends Component {
  constructor() {
    super();
    this.state = {
      allAnimals: AnimalStore.getAllAnimals()
    }
    this._onChange = this._onChange.bind(this)
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

  render() {

    const { allAnimals } = this.state
    let animalShow;
    if(allAnimals){
      let picCount = 0
      console.log("animals arrived", allAnimals)
      animalShow = allAnimals.map((animal, i, a) => {
        if(animal.imgurl){
          picCount++
        }
        if(picCount < 4 && animal.imgurl !== null && !animal.clientId){
           return (
             <div className="imgRow" key={i}>
                <div className="imgDisplay">
                  <img className="imgShow" src={animal.imgurl} alt=""/>
                </div>
                <div className="txtDisplay">
                  <p>{animal.description}</p>
                </div>
              </div> 
            ) 
        } else {
          return
        } 
      }) 
    } else {
      animalShow = <div></div>
    }

    return (
      <div className="imgContainer">
        {animalShow}
      </div>
    )
  }
}
