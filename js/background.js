fetch('https://source.unsplash.com/random')
    .then(data => {
        const bgImage = document.createElement("img")
        bgImage.src = data.url
        document.body.appendChild(bgImage)
    })
    .catch(res => {
        throw Error(res)
    })