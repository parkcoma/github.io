const BGimages = [
    "0.jfif", "1.jfif", "2.jfif"
]
const randomBGImage = BGimages[Math.floor(Math.random() * BGimages.length)]
const BGImage = document.createElement("img")

BGImage.src = `Photos/${randomBGImage}`

document.body.appendChild(BGImage)