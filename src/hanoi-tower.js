module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    turns = 2 ** disksNumber - 1

    return {
        turns: turns,
        seconds: turns / (turnsSpeed / 3600)
    }
}