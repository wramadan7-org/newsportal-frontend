const initialState = {
  dataPersonal: [],
  dataUpdate: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};
