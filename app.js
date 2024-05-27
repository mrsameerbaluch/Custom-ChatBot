let chatBox = document.getElementById('chat-box');
let userInput = document.getElementById('user-input');

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText !== "") {
        appendMessage(userText, 'user');
        userInput.value = '';
        generateBotResponse(userText);
    }
}

function appendMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userText) {
    let botResponse = "Sorry, I don't understand that.";

    const customReplies = {
        "hello": "hello there! How can I help you today?",
        "hi": "Hi there! How can I help you today?",
        "salam": "salam there! How can I help you today?",
        "addmission": "sure! we have multiple courses",
        "addmission chaiye": "G! apko konse course me addmission chaiye ",
        "addmission he": "sure! we have multiple courses",          
        "addmission ho rahi he": "G! apko konse course me addmission chaiye",
        "bye": "Goodbye! Have a nice day!",
    };

    userText = userText.toLowerCase();

    if (customReplies[userText]) {
        botResponse = customReplies[userText];
    }

    setTimeout(() => {
        appendMessage(botResponse, 'bot');
    }, 1000);
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});