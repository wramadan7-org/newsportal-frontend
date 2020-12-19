import http from '../../helpers/http';
import qs from 'querystring';

export default {
  searchPublicNews: (token, search) => ({
    type: 'SEARCH_ALL_NEWS',
    payload: http(token).get(`/news?search=${search}`),
  }),
  searchPersonalNews: (token, search) => ({
    type: 'SEARCH_PERSONAL_NEWS',
    payload: http(token).get(`/news/personal?search=${search}`),
  }),
  clearSearch: (token) => ({
    type: 'CLEAR_SEARCH',
  }),
};
