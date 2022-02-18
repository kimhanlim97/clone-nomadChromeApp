const quote = document.querySelector('.quote')

fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        quote.innerText = data.slip.advice
    })
    .catch(
        quote.innerText = "Sorry, today's quote isn't ready"
    )