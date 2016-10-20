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
  }

}
export default ServerActions