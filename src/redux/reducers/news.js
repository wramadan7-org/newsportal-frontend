const initialState = {
  dataNews: [],
  dataDetailNews: [],
  dataMyNews: [],
  dataUpdateNews: [],
  dataCreateNews: [],
  dataDeleteNews: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
  success: false,
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
        dataNews: action.payload.data.results,
      };
    }
    // detail
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
        dataDetailNews: action.payload.data.results,
      };
    }
    // create
    case 'CREATE_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CREATE_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'CREATE_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        dataCreateNews: action.payload.data.results,
        success: action.payload.data.success,
      };
    }
    // my news
    case 'GET_MY_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MY_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'GET_MY_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        dataMyNews: action.payload.data.results,
        success: action.payload.data.success,
      };
    }
    // update news
    case 'UPDATE_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'UPDATE_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        dataUpdateNews: action.payload.data.results,
        success: action.payload.data.success,
      };
    }
    // delete news
    case 'DELETE_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DELETE_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'DELETE_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        dataDeleteNews: action.payload.data.results,
        success: action.payload.data.success,
      };
    }
    // clear detail
    case 'CLEAR_DETAIL_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CLEAR_DETAIL_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'CLEAR_DETAIL_NEWS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: '',
        dataDetailNews: [],
      };
    }
    default: {
      return state;
    }
  }
};
