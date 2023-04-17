const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");

for (i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", changeSize);
}

function changeSize(e) {
    e.preventDefault();
    for (i = 0; i < fontSize.length; i++) {
        if (fontSize[i].classList.contains("font-size_active")) {
            fontSize[i].classList.remove("font-size_active");
            book.classList.remove("font-size_small");
            book.classList.remove("font-size_big");
        }
    }

    if (this.classList.contains("font-size_small")) {
        this.classList.add("font-size_active");
        book.classList.add("font-size_small");
    } else if (this.classList.contains("font-size_big")) {
        this.classList.add("font-size_active");
        book.classList.add("font-size_big");
    } else {
        this.classList.add("font-size_active");
    }
}