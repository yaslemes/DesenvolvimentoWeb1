function trimSpaces(str) {
    return str.trim().replace(/\s+/g, ' ');
}
console.log(trimSpaces("   JavaScript    é     divertido    ")); // "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // "Programação é interessante"
