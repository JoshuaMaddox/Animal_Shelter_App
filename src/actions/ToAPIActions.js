import API from '../API'

const ToAPIActions = {
  receiveSearchResults(varName){
    AppDispatcher.dispatch({
      type: 'TYPE_NAME',
      payload: { varName }
    }) 
  }
}

export default ToAPIActions