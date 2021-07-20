const axios = require('axios');

const Kucco = {}

Kucco.saveOrder = async function (pool, params) {
  let endpoint = `/user/save-order-to-pool`
  let url = this.kuccoURL + endpoint
  try {
    await axios.post(url, { pool_id: pool, params })
  } catch (err) {
    return err;
  }
}

module.exports = Kucco;