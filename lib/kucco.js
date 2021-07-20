const axios = require('axios');

const Kucco = {}

Kucco.saveOrder = async function (params) {
  let endpoint = `/user/save-order-to-pool`
  let url = this.kuccoURL + endpoint
  let result = await axios.post(url, params)
  return result.data
}

module.exports = Kucco;