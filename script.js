// Card data

const cardsArray = [
    {
        name: 'ammo',
        img: 'img/ammo-chest.png',
    },
    {
        name: 'banana',
        img: 'img/banana.png',
    },
    {
        name: 'bandages',
        img: 'img/bandages.png',
    },
    {
        name: 'bus',
        img: 'img/bus.png',
    },
    {
        name: 'cuddle',
        img: 'img/cuddle.png',
    },
    {
        name: 'ginger',
        img: 'img/ginger-gunner.png',
    },
    {
        name: 'harpoon',
        img: 'img/harpoon.png',
    },
    {
        name: 'llama',
        img: 'img/llama.png',
    },
    {
        name: 'pickaxe',
        img: 'img/pickaxe.png',
    },
    {
        name: 'potion',
        img: 'img/potion-shield.png',
    },
    {
        name: 'rainbow',
        img: 'img/rainbow-pickaxe.png',
    },
    {
        name: 'treasure',
        img: 'img/treasure-chest.png',
    },
]

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
gameGrid.forEach(item => {
    // Create a div
    const card = document.createElement('div');

    // Apply a card class to that div
    card.classList.add('card');

    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;

    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;

    // Append the div to the grid section
    grid.appendChild(card);
});

