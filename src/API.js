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
  }
}

export default API