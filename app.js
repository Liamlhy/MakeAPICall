const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/getAPIResponse', (req, res) => {
	api_helper.make_API_call('https://www.googleapis.com/customsearch/v1?key=AIzaSyAUVZfzOSlSAsnm-vUIslXnzdqhWvODoF0&cx=009902775902239210455:358bsocsgaw&q=artificial&alt=json')
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app
