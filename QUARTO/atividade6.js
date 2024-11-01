function toSnakeCase(str) {
    return str.toLowerCase().split(' ').join('_');
}
console.log(toSnakeCase("Hello World")); // "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // "javascript_is_fun"
