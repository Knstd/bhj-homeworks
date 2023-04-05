const img = document.getElementById('cookie')
const click = document.getElementById('clicker__counter')
img.onclick = () => {
  let clickcount = click.textContent++
  if (clickcount % 2 == 0) {
    img.width *= 1.5
  } else {
    img.width /= 1.5
  }
}