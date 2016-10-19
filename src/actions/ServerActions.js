import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSearchResults(varName){
    AppDispatcher.dispatch({
      type: 'TYPE_NAME',
      payload: { varName }
    }) 
  }
}
export default ServerActions