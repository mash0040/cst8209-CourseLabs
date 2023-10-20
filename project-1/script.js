function generateCode(length = 6, includeNumbers = false) {
    const uppercaseStart = 65; // UTF-16 value for 'A'
    const uppercaseEnd = 90; // UTF-16 value for 'Z'
    const numberStart = 48; // UTF-16 value for '0'
    const numberEnd = 57; // UTF-16 value for '9'

    let characters = '';

    // Add uppercase letters
    for (let i = uppercaseStart; i <= uppercaseEnd; i++) {
        characters += String.fromCodePoint(i);
    }

    // Optionally, add numbers
    if (includeNumbers) {
        for (let i = numberStart; i <= numberEnd; i++) {
            characters += String.fromCodePoint(i);
        }
    }

    let generatedCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedCode += characters.charAt(randomIndex);
    }

    displayCode(generatedCode);
    return generatedCode;
}

function displayCode(code) {
    const codeDisplay = document.getElementById('code-display');
    codeDisplay.innerText = code;
}

// Generate and display a random code when the page loads
window.addEventListener('load', function () {
    generateCode();
});
