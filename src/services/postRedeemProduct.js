import axios from 'axios'

import { API_URL, HEADERS } from './settings'

const fromApiResponseToRedeem = (apiResponse) => {
  console.log(apiResponse)
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
