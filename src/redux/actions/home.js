import http from '../../helpers/http'

export default {
  getNews: () => ({
    type: 'GET_NEWS',
    payload: http().get('news/')
  }),
  detailNews: (id) => ({
    type: 'DETAIL_NEWS',
    payload: http().get(`news/${id}`)
  })
}
