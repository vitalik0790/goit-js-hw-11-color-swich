const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;


startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log(`I love async JS! ${Date.now()}`);
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    console.log("setInterval stopped!");
});