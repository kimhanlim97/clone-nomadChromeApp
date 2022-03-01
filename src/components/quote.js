export default function quote() {
    const quote = document.querySelector('.quote__text')

    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            quote.innerText = data.slip.advice
        })
        .catch(
            quote.innerText = "Sorry, today's quote isn't ready"
        )
}