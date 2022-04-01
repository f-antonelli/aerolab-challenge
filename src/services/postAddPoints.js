import axios from 'axios'
import toast from 'react-hot-toast'

import { API_URL, HEADERS } from './settings'

const fromApiResponseToAddPoints = (apiResponse) => {
  const { data = [] } = apiResponse

  return toast.success(data.message)
}

const postAddPoints = (points) => {
  const apiURL = `${API_URL}/user/points`

  return axios
    .post(apiURL, { amount: points }, { headers: HEADERS })
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToAddPoints)
}

export default postAddPoints
