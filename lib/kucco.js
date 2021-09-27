const axios = require('axios');

const Kucco = {}

Kucco.saveOrders = async function (pool, params) {
  let endpoint = '/save-orders-to-pool';
  let url = this.kuccoURL + endpoint;
  const result = await axios.post(url, { pool_id: pool, orders: params});
  return result;
}

module.exports = Kucco;