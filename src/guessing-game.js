class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.candidate = this.min + Math.ceil((this.max - this.min) / 2);

        console.log('min=', this.min, 'max=', this.max);

        return this.candidate;
    }

    lower() {
        this.max = this.candidate;
    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
