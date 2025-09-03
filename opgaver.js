const hej = 'Hello World    ';

console.log(hej);

console.log("Opgave 1");

function sum(numberarray) {
    let numbersum = 0;
    for (let i = 0; i < numberarray.length; i++) {
        numbersum += numberarray[i];
    }
    return numbersum;
}
console.log(sum([1,2,3]));
console.log(sum([10,20,30,40]));
console.log("");
console.log("Opgave 2");

function max(numberarray) {
    let numbermax = 0;
    for (let i = 0; i < numberarray.length; i++) {
        if (numberarray[i] > numbermax) {
            numbermax = numberarray[i];
        }
    }
    return numbermax;
}
console.log(max([1,2,3]));
console.log(max([20, 30, 10]));
console.log("");
console.log("Opgave 3");

function countVowels(input){
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'a': count++;
            break;
            case 'e': count++;
            break;
            case 'i': count++;
            break;
            case 'o': count++;
            break;
            case 'u': count++;
            break;
            case 'y': count++;
            break;
            case 'æ': count++;
            break;
            case 'ø': count++;
            break;
            case 'å': count++;
            break;
        }
    }
    return count;
}

console.log(countVowels("Alle mennesker skal leve"));