const axios = require('axios')

const Web = {}

Web.LongShort = async function (symbol = "") {
  let endpoint = `/_api/kumex-position/position/longShort?symbol=${symbol}`
  let url = this.webURL + endpoint
  let result = await axios.get(url)
  return result.data
}

module.exports = Web;