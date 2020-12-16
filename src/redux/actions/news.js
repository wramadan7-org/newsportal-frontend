import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getNews: () => ({
    type: 'GET_NEWS',
    payload: http().get('news'),
  }),
  detailNews: (id) => ({
    type: 'DETAIL_NEWS',
    payload: http().get(`news/${id}`),
  }),
  getMyNews: (token) => ({
    type: 'GET_MY_NEWS',
    payload: http(token).get('news/personal'),
  }),
  createNews: (token, data) => ({
    type: 'CREATE_NEWS',
    payload: http(token).post('news', qs.stringify(data)),
  }),
  createImageNews: (token, data) => ({
    type: 'CREATE_NEWS',
    payload: http(token).post('news', data),
  }),
  updateNews: (token, data, id) => ({
    type: 'UPDATE_NEWS',
    payload: http(token).patch(`news/${id}`, qs.stringify(data)),
  }),
  updateImageNews: (token, data, id) => ({
    type: 'UPDATE_NEWS',
    payload: http(token).patch(`news/${id}`, data),
  }),
  deleteNews: (token, id) => ({
    type: 'DELETE_NEWS',
    payload: http(token).delete(`news/${id}`),
  }),
};
