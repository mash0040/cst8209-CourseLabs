const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "Kp5iVF7cTareDY4E41sHJlebIJDnztutkXOKvuO3"; 

const form = document.getElementById("form");
const dateInput = document.getElementById("date");
const favoritesContainer = document.getElementById("favorites-container");

let favorites = [];

// Load favorites from local storage at startup
window.onload = function () {
  const storedFavorites = localStorage.getItem("favorites");
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
    favorites.forEach((favorite) => addFavoriteToDOM(favorite));
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new Date(dateInput.value);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Setting the current date time to 00:00:00

  if (date > currentDate) {
    alert("Future dates are not allowed.");
  } else {
    fetchAPOD(dateInput.value);
  }
});

async function fetchAPOD(date) {
  fetch(`${API_URL}?api_key=${API_KEY}&date=${date}`)
    .then((response) => response.json())
    .then((data) => {
      displayAPOD(data);
    });
}

function displayAPOD(data) {
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const explanation = document.createElement("p");
  const button = document.createElement("button");

  img.id = "apod-image";
  img.src = data.url;
  img.alt = data.title;
  title.id = "apod-title";
  title.textContent = data.title;
  date.id = "apod-date";
  date.textContent = data.date;
  explanation.id = "apod-explanation";
  explanation.textContent = data.explanation;
  button.textContent = "Add to Favorites";

  img.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const span = document.getElementById("close");

    modal.style.display = "flex";
    modalImg.src = data.hdurl;

    span.onclick = function () {
      modal.style.display = "none";
    };
  });

  button.addEventListener("click", function () {
    addToFavorites(data);
  });

  const main = document.getElementById("main");
  main.innerHTML = "";

  const centerContainer = document.createElement("div");
  centerContainer.id = "center-container";

  const contentContainer = document.createElement("div");
  contentContainer.id = "content-container";

  const textContainer = document.createElement("div");
  textContainer.id = "text-container";

  contentContainer.appendChild(img);
  textContainer.appendChild(title);
  textContainer.appendChild(date);
  textContainer.appendChild(explanation);
  textContainer.appendChild(button);

  contentContainer.appendChild(textContainer);
  centerContainer.appendChild(contentContainer);
  main.appendChild(centerContainer);
}

function addToFavorites(data) {
  // This function checks if the data is already in the favorites array
  const isAlreadyFavorite = favorites.some(
    (favorite) => favorite.date === data.date
  );

  if (isAlreadyFavorite) {
    alert("This data is already in your favorites.");
  } else {
    favorites.push(data);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    addFavoriteToDOM(data);
  }
}

function addFavoriteToDOM(data) {
  const favoriteContainer = document.createElement("div");
  favoriteContainer.className = "favorite-container";

  const favoriteTextContainer = document.createElement("div");
  favoriteTextContainer.className = "favorite-text-container";

  const centerFavoriteContainer = document.createElement("div");
  centerFavoriteContainer.className = "center-favorite-container";

  const img = document.createElement("img");
  const date = document.createElement("p");
  const title = document.createElement("h3");
  const removeButton = document.createElement("button");

  img.src = data.url;
  img.alt = data.title;
  date.textContent = data.date;
  title.textContent = data.title;
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", function () {
    removeFromFavorites(data, centerFavoriteContainer);
  });

  favoriteContainer.appendChild(img);
  favoriteTextContainer.appendChild(title);
  favoriteTextContainer.appendChild(date);
  favoriteTextContainer.appendChild(removeButton);

  favoriteContainer.appendChild(favoriteTextContainer);
  centerFavoriteContainer.appendChild(favoriteContainer);

  favoritesContainer.appendChild(centerFavoriteContainer);
}

function removeFromFavorites(data, centerFavoriteContainer) {
  // Remove the favorite from the favorites array
  favorites = favorites.filter((favorite) => favorite.date !== data.date);

  // Update the favorites in local storage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // Remove the favorite from the DOM
  favoritesContainer.removeChild(centerFavoriteContainer);
}
