const initialState = {
  dataPersonal: [],
  dataUpdate: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
  isSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get profile
    case 'PERSONAL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'PERSONAL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'PERSONAL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataPersonal: action.payload.data.results,
      };
    }
    // update profile
    case 'UPDATE_PERSONAL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_PERSONAL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'UPDATE_PERSONAL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataUpdate: action.payload.data.results,
      };
    }
    // change password
    case 'CHANGE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: action.payload.data.success,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};
