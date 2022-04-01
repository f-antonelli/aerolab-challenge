import axios from 'axios'

const { API_URL, HEADERS } = require('./settings')

const fromApiResponseToUser = (apiResponse) => {
  const { data = [] } = apiResponse

  return data
}

const getUser = () => {
  const apiURL = `${API_URL}/user/me`

  return axios
    .get(apiURL, {
      headers: HEADERS,
    })
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToUser)
}

export default getUser
