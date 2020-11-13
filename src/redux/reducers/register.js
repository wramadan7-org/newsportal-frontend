const initialState = {
  isLoading: false,
  isError: true,
  isSuccess: false,
  alertMsg: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message
      }
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isloading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        isSuccess: action.payload.data.success
      }
    }
    default: {
      return state
    }
  }
}
