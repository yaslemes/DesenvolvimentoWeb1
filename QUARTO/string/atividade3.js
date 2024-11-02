function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("arara")); // true
console.log(isPalindrome("hello")); // false
