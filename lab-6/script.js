

    const $emojiContainer = document.getElementById('emoji-container')

    for (const emojis in emoji) {
        const $emojigallery = document.createElement('div')
        $emojigallery.className = 'emojis'
        $emojigallery.innerHTML = `<span class="emojiicon"> ${emoji[emojis].char} </span> <span class="emojiname">${emoji[emojis].name} </span>`
        $emojiContainer.appendChild($emojigallery)
    }
