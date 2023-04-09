let tabs = Array.from(document.querySelectorAll('.tab'))
let tabContent = Array.from(document.querySelectorAll('.tab__content'))


for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabClick)

    function tabClick(tab) {
        for (let i = 0; i < tabs.length; i++) {
            let tabIndex = tabs.indexOf(tab.target)
            let tabActive = document.querySelector('.tab_active')
            let tabConentActive = document.querySelector('.tab__content_active')
            tabActive.classList.remove('tab_active')
            tabConentActive.classList.remove('tab__content_active')
            tabs[i].classList.add('tab_active')
            tabContent[tabIndex].classList.add('tab__content_active')
        }
    }
}