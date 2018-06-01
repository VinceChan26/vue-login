require('dotenv').config({ silent: true })

'use strict'
module.exports = {
  NODE_ENV: '"production"',
  API_HOST: JSON.stringify(process.env.API_HOST),
  DEFAULT_LANG: JSON.stringify(process.env.DEFAULT_LANG),
  PORT: JSON.stringify(process.env.PORT),
}
