function newTitle(newText) {
    
    let h1 = document.querySelector("h1")
    h1.textContent = newText
    return ("Your title has been updated to " + newText)
}

function increaseFontSize () {

    let h1 = document.querySelector("h1")
    let currentFontSize = parseFloat(window.getComputedStyle(h1).fontSize)
    let newFontSize = (currentFontSize + 2) + 'px'
    h1.style.fontSize = newFontSize
    return ("Your fontsize has been updated to " + newFontSize)
}


function decreaseFontSize () {
    let h1 = document.querySelector("h1")
    let currentFontSize = parseFloat(window.getComputedStyle(h1).fontSize)
    let newFontSize = (currentFontSize - 2) + 'px'
    h1.style.fontSize = newFontSize
    return ("Your fontsize has been updated to " + newFontSize)
}

function setBackgroundColor (color) {
    document.body.style.backgroundColor = color
    return ("The background color has been updated to " + color)
}

function setFontColor (font) {
    document.body.style.color = font
    return ("The font color has been updated to " + font)
}

function setTheme (theme) {
    // Defining an array of the valid theme classes
    let  setTheme = ['theme-1', 'theme-2', 'theme-3']
    let body = document.body

    if (setTheme.includes (theme)) {
        
        
        body.className = theme //setting the class of the body element in the HTML document
        //to the value stored in the theme variable.
        
        body.style.backgroundColor = ''
        body.style.color = ''

        return ("Theme has been set to: " + theme)
    }
    else {
        return("Invalid theme: " + theme)
    }
}

