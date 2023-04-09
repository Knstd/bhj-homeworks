let menu = document.querySelector('.dropdown__value')
let menuList = document.querySelector('.dropdown__list')
let menuItem = document.querySelectorAll('.dropdown__item')

menu.onclick = () => {
    menuList.classList.add('dropdown__list_active')
}

for (i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', changeItemName)
}

function changeItemName(item) {
    item.preventDefault()
    menu.textContent = this.textContent
    menuList.classList.remove('dropdown__list_active')
}