const reveal = Array.from(document.querySelectorAll('.reveal'))

window.addEventListener('scroll', function() {
  for (let i = 0; i < reveal.length; i++) {
    if (window.innerHeight > reveal[i].getBoundingClientRect().top) {
      reveal[i].classList.add('reveal_active')
    } 
  }
})