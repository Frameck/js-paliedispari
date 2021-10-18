const userEvenOdd = prompt('Place your bet: write \'even\' or \'odd\'').toLowerCase()
const userNumber = parseInt(prompt('Insert a number between 1 and 5'))

function generateRandomNumber(minNum = 1, maxNum = 10) {
    const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    return randomNum
}

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

const computerNumber = generateRandomNumber(1, 5)
const sum = userNumber + computerNumber
const result = evenOrOdd(sum)
let message = ''

if (result === userEvenOdd) {
    message = `You won, the number is ${result}: ${sum}`
} else {
    message = `You lost, the number is ${result}: ${sum}`
}
alert(message)