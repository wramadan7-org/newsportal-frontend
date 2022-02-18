import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getPersonal: (token) => ({
    type: 'PERSONAL',
    payload: http(token).get('users/personal'),
  }),
  updatePersonal: (token, data) => ({
    type: 'UPDATE_PERSONAL',
    payload: http(token).patch('users/personal', qs.stringify(data)),
  }),
  updatePersonalFormData: (token, data) => ({
    type: 'UPDATE_PERSONAL',
    payload: http(token).patch('users/personal', data),
  }),
  changePassword: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).patch(
      'users/personal/changePassword',
      qs.stringify(data),
    ),
  }),
};
