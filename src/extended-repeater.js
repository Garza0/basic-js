module.exports = function repeater(str, options) {
    let separator = options.separator || '+'
    let addSeparator = options.additionSeparator || '|'
    let addition = options.addition !== undefined ? String(options.addition) : ''

    let one = repeat(addition, options.additionRepeatTimes, addSeparator, str)
    return repeat(one, options.repeatTimes, separator)

}

function repeat(startStr, times, separ, start = '') {

    let arr = startStr
    for (let i = 1; i < times; i++) {
        arr += separ + startStr
    }
    return start + arr
}