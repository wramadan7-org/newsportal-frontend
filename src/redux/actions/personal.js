import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getPersonal: (token) => ({
    type: 'PERSONAL',
    payload: http(token).get('/users/personal')
  }),
  updatePersonal: (token, data) => ({
    type: 'UPDATE_PERSONAL',
    payload: http(token).patch('/users/personal', qs.stringify(data))
  })
}
