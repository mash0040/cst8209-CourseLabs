function createMovieTitle(query = '') {
        const movieContainer = document.getElementById('movie-container')
        movieContainer.innerHTML = ''

        const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()))

        filteredMovies.forEach(movie => {
        const movieDiv = document.createElement('div')
    
        const titleElement = document.createElement('h3')
        titleElement.textContent = `${movie.title} (${movie.year})`
        movieDiv.appendChild(titleElement)

        const descriptionElement = document.createElement('p')
        descriptionElement.textContent = movie.description
        descriptionElement.classList.add('d-none') 
        movieDiv.appendChild(descriptionElement)

        titleElement.addEventListener('click', () => {
            descriptionElement.classList.toggle('d-none')
        });

        movieContainer.appendChild(movieDiv)
    })
}

document.getElementById('form').addEventListener('input', function(event) {
    const searchQuery = event.target.value.trim()
    createMovieTitle(searchQuery)
  })
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()
  })

createMovieTitle()

