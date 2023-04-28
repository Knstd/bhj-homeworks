interests = Array.from(document.querySelectorAll('.interest__check'))


for (let interest of interests) {
    interest.addEventListener('change', checkBoxChange)
}

function checkBoxChange() {
    const elements = this.closest('li.interest').getElementsByTagName('input');
    if (this.checked === true) {
        for (let checkBox of elements) {
            checkBox.checked = true
        }
    } else {
        for (let checkBox of elements) {
            checkBox.checked = false
        }
    }
}