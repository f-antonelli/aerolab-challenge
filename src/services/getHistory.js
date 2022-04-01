import axios from 'axios'

import { API_URL, HEADERS } from './settings'

const fromApiResponseToHistory = (apiResponse) => {
  const { data = [] } = apiResponse

  return data
}

const getHistory = () => {
  const apiURL = `${API_URL}/user/history`

  return axios
    .get(apiURL, {
      headers: HEADERS,
    })
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToHistory)
}

export default getHistory
