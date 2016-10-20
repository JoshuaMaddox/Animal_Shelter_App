import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allAnimals; 
let _singleAnimal;
let _animalToEdit;

class AnimalStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ANIMALS':
          _allAnimals = action.payload.allAnimals
          this.emit('CHANGE')
          break
        case 'RECEIVE_SINGLE_ANIMAL':
          _singleAnimal = action.payload.singleAnimal
          this.emit('CHANGE')
          break
        case 'RECEIVE_ANIMAL_TO_EDIT':
          _animalToEdit = action.payload.animalToEdit
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getAllAnimals() {
    return _allAnimals
  }

  getSingleAnimal() {
    return _singleAnimal
  }

  getAnimalToEdit() {
    return _animalToEdit
  }
}

export default new AnimalStore