let menuLink = Array.from(document.getElementsByClassName("menu__link"));

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = () => {
        let menuItem = menuLink[i].closest(".menu__item");
        let menuSub = menuItem.querySelector(".menu_sub");
        if (menuSub) {
            closeMenu();
            menuSub.classList.add("menu_active");
            return false;
        }
    };
}

function closeMenu() {
    let menuActive = document.getElementsByClassName("menu_active");
    for (let i = 0; i < menuActive.length; i++) {
        menuActive[i].classList.remove("menu_active");
    }
}
