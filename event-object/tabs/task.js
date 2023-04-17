let tabs = Array.from(document.querySelectorAll('.tab'))
let tabContent = Array.from(document.querySelectorAll('.tab__content'))


for (i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    tab.addEventListener('click', tabClick)

    function tabClick() {
        let tabIndex = tabs.indexOf(tab)
        let tabActive = document.querySelector('.tab_active')
        let tabConentActive = document.querySelector('.tab__content_active')
        tabActive.classList.remove('tab_active')
        tabConentActive.classList.remove('tab__content_active')
        tab.classList.add('tab_active')
        tabContent[tabIndex].classList.add('tab__content_active')
    }
}