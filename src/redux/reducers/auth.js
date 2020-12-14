const initialState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  token: '',
  alertMsg: '',
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        alertMsg: action.payload.data.message,
        token: action.payload.data.results,
        success: action.payload.data.success,
      };
    }
    case 'LOGOUT': {
      return {
        isLogin: false,
        isLoading: false,
        isError: false,
        token: '',
        alertMsg: '',
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};
