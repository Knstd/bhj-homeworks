Counter = setInterval(() => {
    let timer = document.getElementById('timer');
    timer.textContent--;
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(Counter);
    }
}, 1000)