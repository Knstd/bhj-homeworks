let windowActive = document.getElementById('modal_main')
let windowClose = document.getElementsByClassName('modal__close')
let showSuccess = document.getElementsByClassName('show-success')
let windowSuccess = document.getElementById('modal_success')

windowActive.classList.add('modal_active');

for (let i = 0; i < windowClose.length; i++) {
  windowClose[i].addEventListener('click', () => {
    windowActive.classList.remove('modal_active'); 
    windowSuccess.classList.remove('modal_active')
  })
}

for (let i = 0; i < showSuccess.length; i++) {
   showSuccess[i].addEventListener('click', () => {
   windowSuccess.classList.add('modal_active')
   })
}
