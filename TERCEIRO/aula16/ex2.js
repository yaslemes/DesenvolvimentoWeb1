let c1 = false;
let c2 = true;
let c3 = true;

console.log("1");
console.log("2");

if (c1) {
    console.log("A");
} else {
    if (c2) {
        if (c3) {
            console.log("B");
        } else {
            console.log("C");
        }
    } else {
        console.log("D");
    }
}

console.log("1");
console.log("2");
