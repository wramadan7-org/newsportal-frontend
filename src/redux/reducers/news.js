const initialState = {
  data: [],
  detail: [],
  isLoading: false,
  //   isLogin: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'GET_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: '',
        data: action.payload.data.results,
      };
    }
    case 'DETAIL_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DETAIL_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'DETAIL_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: '',
        detail: action.payload.data.results,
      };
    }
    default: {
      return state;
    }
  }
};
