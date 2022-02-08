const images = ["background1.jpeg", "background2.jpeg", "background3.jpeg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)