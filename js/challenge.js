// Get DOM elements
const countElement = document.getElementById('count');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const pauseButton = document.getElementById('pause');
const likesElement = document.getElementById('likes');

// Initialize counter and likes
let counter = 0;
let likes = 0;
let intervalId;

// Update counter display
function updateCounter() {
    countElement.textContent = counter;
}

// Increment counter
function increment() {
    counter++;
    updateCounter();
}

// Decrement counter
function decrement() {
    counter--;
    updateCounter();
}

// Handle like button click
function like() {
    likes++;
    likesElement.textContent = `Likes: ${likes}`;
}

// Start the timer
function startTimer() {
    intervalId = setInterval(increment, 1000);
}

// Pause the timer
function pauseTimer() {
    clearInterval(intervalId);
    minusButton.disabled = true;
    plusButton.disabled = true;
    pauseButton.textContent = 'Resume';
}

// Resume the timer
function resumeTimer() {
    startTimer();
    minusButton.disabled = false;
    plusButton.disabled = false;
    pauseButton.textContent = 'Pause';
}

// Attach event listeners
minusButton.addEventListener('click', decrement);
plusButton.addEventListener('click', increment);
pauseButton.addEventListener('click', () => {
    if (intervalId) {
        pauseTimer();
    } else {
        resumeTimer();
    }
});

// Start the timer initially
startTimer();
