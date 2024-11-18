const router = require('express').Router()

const jokes = require('./jokes.json')

router.get('/api/v1/random-joke', async (_, response) => {
    const jokeCount = jokes.length
    const num = Math.floor(Math.random() * jokeCount)
    response.send(jokes[num])
})

module.exports = router