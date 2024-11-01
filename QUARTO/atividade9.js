function replaceChar(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar);
}
console.log(replaceChar("banana", "a", "o")); // "bonono"
console.log(replaceChar("hello world", "l", "x")); // "hexxo worxd"