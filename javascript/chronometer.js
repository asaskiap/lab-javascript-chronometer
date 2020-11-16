class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            if (typeof callback === 'function') {
                callback();
            }
        }, 1000);
    }
    getMinutes() {
        if (this.currentTime === 0) return 0;
        else return Math.floor(Number(this.currentTime) / 60);
    }
    getSeconds() {
        if (this.currentTime === 0) return 0;
        else return Number(this.currentTime) % 60;
    }
    twoDigitsNumber(num) {
        if (num.toString().length === 1) {
            return '0' + num.toString();
        } else return num.toString();
    }
    stopClick() {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick(min, sec) {
        if (!(min || sec)) {
            return `00:00`;
        } else return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
    }
}