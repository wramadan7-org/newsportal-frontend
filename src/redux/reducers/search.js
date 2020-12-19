const initialState = {
  isLoading: false,
  isError: false,
  success: false,
  alertMsg: '',
  searchPublic: [],
  searchPersonal: [],
  isSearch: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // PUBLIC NEWS
    case 'SEARCH_ALL_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEARCH_ALL_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'SEARCH_ALL_NEWS_FULFILLED': {
      return {
        ...state,
        isloading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        success: action.payload.data.success,
        searchPublic: action.payload.data.results,
        isSearch: true,
      };
    }
    // OWN NEWS
    case 'SEARCH_PERSONAL_NEWS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEARCH_PERSONAL_NEWS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'SEARCH_PERSONAL_NEWS_FULFILLED': {
      return {
        ...state,
        isloading: false,
        isError: false,
        alertMsg: action.payload.data.message,
        success: action.payload.data.success,
        searchPersonal: action.payload.data.results,
        isSearch: true,
      };
    }
    case 'CLEAR_SEARCH': {
      return {
        isLoading: false,
        isError: false,
        success: false,
        alertMsg: '',
        searchPublic: [],
        searchPersonal: [],
        isSearch: false,
      };
    }
    default: {
      return state;
    }
  }
};
