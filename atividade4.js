function countOccurrences(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences("banana", "a")); // 3
console.log(countOccurrences("hello world", "l")); // 3
