import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

class AnimalStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'TYPE_NAME':
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

}

export default new AnimalStore