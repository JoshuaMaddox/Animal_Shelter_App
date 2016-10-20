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
  },

  sendEditedClient(editedClient) {
    API.sendEditedClient(editedClient)
  },

  sendNewAnimal(newAnimal){
    API.sendNewAnimal(newAnimal)
  },

  getAnimals(){
    API.getAnimals()
  },

  searchAnimal(searchName){
    API.searchAnimal(searchName)
  },

  deleteAnimal(id){
    API.deleteAnimal(id)
  },

  editAnimal(id) {
    API.editAnimal(id)
  },

  sendEditedAnimal(editedAnimal) {
    API.sendEditedAnimal(editedAnimal)
  },
}

export default ToAPIActions