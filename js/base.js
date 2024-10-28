document.addEventListener("DOMContentLoaded", function() {
    const text = "Sauvinet Lucas";
    const typingTextElement = document.getElementById("typing-text");
    const cursorTextElement = document.getElementById("cursor-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, Math.random() * 150 + 50);
        } else {
            cursorTextElement.style.display = 'none';
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const devText = "Développeur Full Stack";
    const devTypingTextElement = document.getElementById("dev-typing-text");
    const devCursorTextElement = document.getElementById("dev-cursor-text");
    let devIndex = 0;

    function devType() {
        if (devIndex < devText.length) {
            devTypingTextElement.textContent += devText.charAt(devIndex);
            devIndex++;
            setTimeout(devType, Math.random() * 150 + 50);
        } else {
            devCursorTextElement.style.display = 'none';
        }
    }

    setTimeout(devType, 1700);
});
