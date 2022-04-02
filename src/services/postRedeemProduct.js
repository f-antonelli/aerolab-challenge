import axios from 'axios'
import toast from 'react-hot-toast'

import { API_URL, HEADERS } from './settings'

const fromApiResponseToRedeem = (apiResponse) => {
  const { data = [] } = apiResponse

  return toast.success(data.message)
}

const postRedeemProduct = (productId) => {
  const apiURL = `${API_URL}/redeem`

  return axios
    .post(apiURL, { productId }, { headers: HEADERS })
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToRedeem)
}

export default postRedeemProduct
