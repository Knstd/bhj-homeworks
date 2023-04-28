const chat = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input')


chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && input.value != '') {
        time = new Date()
        let messageList = [
            'message1',
            'message2',
            'message3',
            'message4',
            'message5',
            'message6',
            'message7',
        ]
        randomMessage = Math.floor(Math.random() * messageList.length)
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                <div class="message__text">${input.value}</div>
            </div>
            ${input.value = ''}
            <div class="message">
                <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                <div class="message__text">${messageList[randomMessage]}</div>
            </div>
        `
    }
})
