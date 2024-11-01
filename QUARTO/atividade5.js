function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("João Silva")); // "JS"
console.log(getInitials("Maria Oliveira")); // "MO"
