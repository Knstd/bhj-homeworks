const rotator = Array.from(document.querySelectorAll(".rotator__case"));

function rotate() {
    let currentRotator = rotator.findIndex((rotatorIndex) =>
        rotatorIndex == document.querySelector(".rotator__case_active"));
    rotator[currentRotator].classList.remove("rotator__case_active");
    currentRotator++;
    if (currentRotator >= rotator.length) {
        currentRotator = 0;
    }
    rotator[currentRotator].classList.add("rotator__case_active");
}

setInterval(rotate, 1000);