function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // "JavaScript Is Awesome"
