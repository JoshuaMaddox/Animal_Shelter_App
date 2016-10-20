import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allClients; 
let _singleClient;
let _clientToEdit;

class ClientStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_CLIENTS':
          _allClients = action.payload.allClients
          this.emit('CHANGE')
          break
        case 'RECEIVE_SINGLE_CLIENT':
          _singleClient = action.payload.singleClient
          this.emit('CHANGE')
          break
        case 'RECEIVE_CLIENT_TO_EDIT':
          _clientToEdit = action.payload.clientToEdit
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

  getAllClients() {
    return _allClients
  }

  getSingleClients() {
    return _singleClient
  }

  getClientToEdit() {
    return _clientToEdit
  }
}

export default new ClientStore