try {
	require('dotenv').config({ path: __dirname + '/.env' })
} catch(error) {
	console.log('.env file/dotenv lib not found. using env vars from current environment')
}

module.exports.apiBaseUrl = process.env.API_BASE_URL || 'http://local.api.pokemon-challenge.com'
