const $lunchRoom = document.getElementById('lunchRoom')
const $lunchRoomLink = document.getElementById('lunchRoomLink')
const $weatherReport = document.getElementById('weatherReport')
const $weatherReportLink = document.getElementById('weatherReportLink')
const $story = document.getElementById('story')

const $lrContainer = document.getElementById('lrContainer')
const $lrNoun = document.getElementById('lrNoun')
const $lrAdjective1 = document.getElementById('lrAdjective1')
const $lrAdjective2 = document.getElementById('lrAdjective2')
const $lrVegetable1 = document.getElementById('lrVegetable1')
const $lrVegetable2 = document.getElementById('lrVegetable2')
const $lrAnimal = document.getElementById('lrAnimal')


const $wrAdjective1 = $weatherReport.elements.wrAdjective1
const $wrAdjective2 = $weatherReport.elements.wrAdjective2
const $wrPluralNoun1 = $weatherReport.elements.$wrPluralNoun1
const $wrPluralNoun2 = $weatherReport.elements.$wrPluralNoun2
const $wrNumber1 = $weatherReport.elements.$wrNumber1
const $wrNumber2 = $weatherReport.elements.$wrNumber2
const $wrArticleOfClothing = $weatherReport.elements.$wrArticleOfClothing




$weatherReportLink.addEventListener('click',  () => {
    $weatherReport.classList.remove('d-none')
    $lunchRoom.classList.add('d-none')
    $story.classList.add('d-none')
    $weatherReportLink.classList.add('active')
    $lunchRoomLink.classList.remove('active')
} )



$lunchRoomLink.addEventListener('click',  () => {
    $lunchRoom.classList.remove('d-none')
    $weatherReport.classList.add('d-none')
    $story.classList.add('d-none')
    $lunchRoomLink.classList.add('active')
    $weatherReportLink.classList.remove('active')
} )

$lunchRoom.addEventListener('submit',  (lunch) => {
    lunch.preventDefault()
    $story.innerHTML = `<p class="fs-3">
        Make sure your lunch <span class="text-danger fw-bold">${lrContainer.value}</span> 
        is filled with <span class="text-danger fw-bold">${lrAdjective1.value}</span> food. 
        Do not go to the <span class="text-danger fw-bold">${lrAdjective2.value}</span> 
        food stand across the street from the school. The hamburgers they serve are 
        fried in <span class="text-danger fw-bold">${lrNoun.value}</span> and are made of 
        <span class="text-danger fw-bold">${lrAnimal.value}</span> meat. So take a sandwich 
        made of <span class="text-danger fw-bold">${lrVegetable1.value}</span> or 
        <span class="text-danger fw-bold">${lrVegetable2.value}</span>. It's much healthier!
    </p>`
    $story.classList.remove('d-none')
    $lunchRoom.reset()
} )

$weatherReport.addEventListener('submit', (weather) => {
    weather.preventDefault()
    $story.innerHTML = `<p class="fs-3">
        Early tomorrow, a <span class="text-danger fw-bold">${wrAdjective1.value}</span> 
        front will collide with a mass of hot <span class="text-danger fw-bold">
        ${wrPluralNoun1.value}</span> moving from the north. This means we can expect 
        <span class="text-danger fw-bold">${wrAdjective2.value}</span> winds and occasional 
        <span class="text-danger fw-bold">${wrPluralNoun2.value}</span> by late afternoon. 
        Wind velocity will be <span class="text-danger fw-bold">${wrNumber1.value}</span> 
        miles an hour, and the high temperature should be around 
        <span class="text-danger fw-bold">${wrNumber2.value}</span> degrees. So, if you're 
        going out, you had better plan on wearing your 
        <span class="text-danger fw-bold">${wrArticleOfClothing.value}</span>.
    </p>`
    $story.classList.remove('d-none')
    $weatherReport.reset()
})