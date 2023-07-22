function toggleImage() {
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar_caio.jpg")
  } else {
    img.setAttribute("src", "./assets/assets/avatar_caio2.png")
  }
}

const element = document.getElementById("switch")
const html = document.getElementById("html")
const toggle = () => {
  html.classList.toggle("light")
}
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  element.addEventListener("touchstart", toggle)
} else {
  element.addEventListener("click", toggle)
}
