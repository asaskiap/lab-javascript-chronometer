const chronometer = new Chronometer();
// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
    let min = chronometer.getMinutes();
    let sec = chronometer.getSeconds();

    printMinutes(min);
    printSeconds(sec);
}

function printMinutes(min) {
    min = chronometer.twoDigitsNumber(min);
    minDec.innerHTML = min[0];
    minUni.innerHTML = min[1];
}

function printSeconds(sec) {
    sec = chronometer.twoDigitsNumber(sec);
    secDec.innerHTML = sec[0];
    secUni.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit(time) {
    const newTime = document.createElement('li');

    newTime.innerHTML = time;

    splits.appendChild(newTime);
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.className = 'btn stop';

    btnLeft.innerText = 'STOP';

    chronometer.startClick();
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerText = 'START';
}

function setResetBtn() {
    //split
    btnRight.className = 'btn reset';
    btnRight.innerText = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    let time = 0;
    if (btnLeft.className === 'btn start') {
        console.log('start was clickeD');
        setStopBtn();
        setSplitBtn();
        chronometer.startClick(printTime);
    } else {
        console.log('stop was clicked');
        chronometer.stopClick();

        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.className === 'btn reset') {
        chronometer.resetClick();
        printTime();
        clearSplits();
    } else {
        const min = chronometer.getMinutes();
        const sec = chronometer.getSeconds();
        const newTime = chronometer.splitClick(min, sec);

        printSplit(newTime);
    }
});