const getJoke = async () => {
    const jokeData = await fetch('/api/v1/random-joke')
    const { joke, punchline } = await jokeData.json()

    const jokeH1 = document.querySelector('#joke')
    const punchlineH1 = document.querySelector('#punchline')

    jokeH1.textContent = joke
    punchlineH1.textContent = punchline
}

getJoke()