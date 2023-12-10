document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const dateInput = document.getElementById('date');
    const colorsDiv = document.getElementById('colors');
    const clearButton = document.getElementById('clear');


    history = []

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedDate = dateInput.value;
        fetchColorOfTheDay(selectedDate);
    });

    clearButton.addEventListener('click', function () {
        clearHistory();
    });

    async function fetchColorOfTheDay(date) {
        fetch(`https://colors.zoodinkers.com/api?date=${date}`)
            .then(response => response.json())
            .then(data => {
                displayColorInfo(data);
                saveToLocalStorage(data);
            })
            .catch(error => {
                console.error('Error fetching color:', error);
            });
    }

    function displayColorInfo(data) {
        const {hex, date } = data;

        const colorDiv = document.createElement('div');
        const text = document.createElement('div');
        text.classList.add('text');
        const box = document.createElement('div');
        box.classList.add('box');
        colorDiv.classList.add('color-swatch');
        colorDiv.style.backgroundColor = hex;
        text.innerHTML = `<span>Hex: ${hex}</span> <span>Date: ${date}</span>`;

        colorsDiv.appendChild(box);
        box.appendChild(colorDiv);
        box.appendChild(text);
      


       
    }

    function saveToLocalStorage(data) {
        let history = JSON.parse(localStorage.getItem('searchHistory'));
        if (!history) {
            history = [];
        }
        history.push(data);
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
    
    function displaySearchHistory() {
        let history = JSON.parse(localStorage.getItem('searchHistory'));
        if (!history) {
            history = [];
        }
        colorsDiv.innerHTML = ''; // Clear previous search history
    
        history.forEach(entry => {
            const {hex, date } = entry;
    
            const colorDiv = document.createElement('div');
            const text = document.createElement('div');
            const box = document.createElement('div');
            text.classList.add('text');
            box.classList.add('box');
            colorDiv.classList.add('color-swatch');
            colorDiv.style.backgroundColor = hex;
            text.innerHTML = `<span>Hex: ${hex}</span> <span>Date: ${date}</span>`;
    
            colorsDiv.appendChild(box);
            box.appendChild(colorDiv);
            box.appendChild(text);
        });
    }

    function clearHistory() {
        localStorage.removeItem('searchHistory');
        colorsDiv.innerHTML = ''; // Clear displayed search history
    }

    // Display search history on page load
    displaySearchHistory();
});