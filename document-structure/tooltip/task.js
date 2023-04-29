const hasToolTip = Array.from(document.querySelectorAll('.has-tooltip'))

for (let tip of hasToolTip) {
    
    tip.insertAdjacentHTML('afterEnd', `<div class = 'tooltip' style = 'left: 0; top: 0'></div>`);

    tip.addEventListener('click', (e) => {
        e.preventDefault()
        let position = tip.getBoundingClientRect()
        let tooltip = tip.nextElementSibling;
        let title = tip.getAttribute('title')
        tooltip.style.left = `${position.left}px`
        tooltip.style.top = `${position.bottom}px`
        tooltip.textContent = `${title}`
        tooltip.classList.toggle('tooltip_active')
    })
}