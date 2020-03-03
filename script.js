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

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
gameGrid.forEach(item => {
    const { name, img } = item; // 1

    // Create card element with the nale dataset
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name; // 2

    // Create front of card
    const front = document.createElement('div');
    front.classList.add('front');

    // Create back of card
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;

    // Append card to grid, and front and back to each card
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

// Add match CSS
const match = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    })
}

// Add event listener to grid
grid.addEventListener('click', event => {
    // The event target is our clicked item
    let clicked = event.target;

    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
    ) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }
        // If both guesses are not empty...
        if (firstGuess && secondGuess) {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
                // run the match function
                setTimeout(match, delay);
            } 
            setTimeout(resetGuesses, delay);
        }
        // Set previous target to clicked
        previousTarget = clicked;
    }
});