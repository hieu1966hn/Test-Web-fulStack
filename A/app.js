// function findOppositeNumber(n, firstNum){

// }
const a = "abcdef";
const b = "xyzt";

function merge2String(a, b) {
    let c = ``;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (i === j) {
                c += `${a[i]}${b[j]}`;
            }
            else if (i == a.length - 1 && j > i) {
                c += `${b[j]}`;
            }
            else if (j == b.length - 1 && i > j) {
                c += `${a[i]}`;
            }
        }
    }
    return c;
}
console.log(merge2String(a, b));
