const axios = require('axios');

const Kucco = {}

Kucco.saveOrder = async function (pool, params) {
  let endpoint = `/user/save-order-to-pool`;
  let url = this.kuccoURL + endpoint;
  const result = await axios.post(url, { pool_id: pool, params});
  return result;
}

module.exports = Kucco;