import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveClients(allClients){
    console.log('allClients: ', allClients)
    AppDispatcher.dispatch({
      type: 'RECEIVE_CLIENTS',
      payload: { allClients }
    }) 
  },

  receiveSingleClient(singleClient) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SINGLE_CLIENT',
      payload: { singleClient }
    }) 
  },

  receiveClientToEdit(clientToEdit) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CLIENT_TO_EDIT',
      payload: { clientToEdit }
    })
  },

   receiveAnimals(allAnimals){
    console.log('allAnimals: ', allAnimals)
    AppDispatcher.dispatch({
      type: 'RECEIVE_ANIMALS',
      payload: { allAnimals }
    }) 
  },

  receiveSingleAnimal(singleAnimal) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SINGLE_Animal',
      payload: { singleAnimal }
    }) 
  },

  receiveAnimalToEdit(animalToEdit) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ANIMAL_TO_EDIT',
      payload: { animalToEdit }
    })
  },

  removeSingleClient(){
     AppDispatcher.dispatch({
      type: 'REMOVE_SINGLE_CLIENT'
    })
  }

}
export default ServerActions