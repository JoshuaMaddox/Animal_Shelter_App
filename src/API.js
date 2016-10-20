import { get, post, put } from 'axios'
import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { browserHistory } from 'react-router'

const API = {
  sendNewClient(newClient) {
    post(`/api/clients`, newClient)
      .then(res => {
        let { data } = res
        ServerActions.receiveClients(data)
      })
      .catch(console.error)
  },

  getClients() {
    get(`/api/clients`)
      .then(res => {
        let { data } = res
        ServerActions.receiveClients(data)
      })
      .catch(console.error)
  },

  searchClient(searchName) {
    searchName = encodeURIComponent(searchName)
    get(`/api/clients/client?email=${searchName}`)
      .then(res => {
        let { data } = res
        ServerActions.receiveSingleClient(data)
      })
      .catch(console.error)
  },

  deleteClient(id) {
    axios.delete(`/api/clients/${id}`)
    .then(res => {
        let { data } = res
        ServerActions.receiveClients(data)
      })
      .catch(console.error)
  },

  editClient(id){
    get(`/api/clients/${id}`)
      .then(res => {
        let { data } = res
        ServerActions.receiveClientToEdit(data)
        browserHistory.push('/clients/client/:id')
      })
      .catch(console.error)
  },

  sendEditedClient(editedClient){
    put(`/api/clients/client`, editedClient)
      .then(res => {
        let { data } = res
        ServerActions.receiveClients(data)
        browserHistory.push('/clients')
      })
      .catch(console.error)
  },

  ///////////////////////////////////////////////////

  sendNewAnimal(newAnimal) {
    post(`/api/animals`, newAnimal)
      .then(res => {
        let { data } = res
        ServerActions.receiveAnimals(data)
      })
      .catch(console.error)
  },

  getAnimals() {
    get(`/api/animals`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAnimals(data)
      })
      .catch(console.error)
  },

  searchAnimal(searchName) {
    searchName = encodeURIComponent(searchName)
    get(`/api/animals/animal?email=${searchName}`)
      .then(res => {
        let { data } = res
        ServerActions.receiveSingleAnimal(data)
      })
      .catch(console.error)
  },

  deleteAnimal(id) {
    axios.delete(`/api/animals/${id}`)
    .then(res => {
        let { data } = res
        ServerActions.receiveAnimals(data)
      })
      .catch(console.error)
  },

  editAnimal(id){
    get(`/api/animals/${id}`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAnimalToEdit(data)
        browserHistory.push('/animals/animal/:id')
      })
      .catch(console.error)
  },

  sendEditedAnimal(editedAnimal){
    put(`/api/animals/animal`, editedAnimal)
      .then(res => {
        let { data } = res
        ServerActions.receiveAnimals(data)
        browserHistory.push('/animals')
      })
      .catch(console.error)
  }
}

export default API