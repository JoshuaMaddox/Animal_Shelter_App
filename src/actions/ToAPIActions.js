import API from '../API'

const ToAPIActions = {
  sendNewClient(newClient){
    API.sendNewClient(newClient)
  },

  getClients(){
    API.getClients()
  },

  searchClient(searchName){
    API.searchClient(searchName)
  },

  deleteClient(id){
    API.deleteClient(id)
  },

  editClient(id) {
    API.editClient(id)
  }
}

export default ToAPIActions