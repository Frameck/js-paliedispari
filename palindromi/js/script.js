function isPalindrome(word) {
    word = word.toLowerCase()
    let array = word.split('')
    let arrayReverse = array.reverse()
    if (arrayReverse.join('') === word) {
        return true
    } else {
        return false
    }
}


const word = prompt('Inserisci una parola per verificare se è palindroma')

const wordIsPalindrome = isPalindrome(word)
let message = ''

if (wordIsPalindrome) {
    message = 'La parola fornita è palindroma'
} else {
    message = 'La parola fornita non è palindroma'
}

alert(message)