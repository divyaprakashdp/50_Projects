const jokeElement = document.getElementById("joke");
const btn = document.getElementById("jokeBtn")

function getAnotherJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = fetch('https://icanhazdadjoke.com/', config)
                .then((res) => res.json())
                .then((data) => {
                    jokeElement.innerText = data.joke
                })
}

getAnotherJoke()

btn.addEventListener('click', getAnotherJoke)