const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelector('.cards');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const cardWidth = document.querySelector('.card').offsetWidth;
const containerWidth = cardsContainer.offsetWidth; 

let scrollPosition = 0;
let maxScroll = cards.scrollWidth - containerWidth; 

nextButton.addEventListener('click', () => {
    scrollPosition += cardWidth * 1.1;
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }
    cards.style.transform = `translateX(-${scrollPosition}px)`;
});

prevButton.addEventListener('click', () => {
    scrollPosition -= cardWidth * 1.1;
    if (scrollPosition < 0) {
        scrollPosition = 0; 
    }
    cards.style.transform = `translateX(-${scrollPosition}px)`;
});
