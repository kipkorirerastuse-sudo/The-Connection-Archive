const today = new Date();
const timeDiff = today - startDate;
const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

document.getElementById('dayCounter').innerText = ${daysTogether} Days of Growing Together;

// 2. Conversation Prompts
const prompts = [
    "What is one thing I do that makes you feel most loved?",
    "If we could travel anywhere tomorrow, where would we go?",
    "What was your first impression of me versus how you see me now?",
    "What's a goal you want us to achieve together this year?",
    "What is your favorite memory of us so far?",
    "How can I better support you during your busy weeks at university?"
];

function generatePrompt() {
    const promptBox = document.getElementById('promptBox');
    const randomIndex = Math.floor(Math.random() * prompts.length);
    
    // Add a simple fade-out/in effect
    promptBox.style.opacity = 0;
    setTimeout(() => {
        promptBox.innerText = "${prompts[randomIndex]}";
        promptBox.style.opacity = 1;
    }, 200);
}

// Set initial prompt
generatePrompt();
