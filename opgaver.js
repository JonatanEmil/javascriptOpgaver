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

console.log(sum([1, 2, 3]));
console.log(sum([10, 20, 30, 40]));
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

console.log(max([1, 2, 3]));
console.log(max([20, 30, 10]));
console.log("");
console.log("Opgave 3");

function countVowelsSmall(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        switch (input[i].toLowerCase()) {
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
            case 'y':
                count++;
                break;
            case 'æ':
                count++;
                break;
            case 'ø':
                count++;
                break;
            case 'å':
                count++;
                break;
        }
    }
    return count;
}

console.log(countVowelsSmall('Åge bøjede syv fine rør ud.'));
console.log('Virker ikke med caps');
console.log('Opgave 3 med caps')

function countVowels(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        if (char == 'a' ||
            char == 'e' ||
            char == 'i' ||
            char == 'o' ||
            char == 'u' ||
            char == 'y' ||
            char == 'æ' ||
            char == 'ø' ||
            char == 'å') {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Åge bøjede syv fine rør ud.'));
console.log('Skulle bare bruge .toLowerCase, så ikke forskel på switch case og == (eller ===) i forhold til at læse store eller små bogstaver.');
console.log("");
console.log("Opgave 4");

function filterOdd(numberarray) {
    let oddarray = [];
    for (let i = 0; i < numberarray.length; i++) {
        const current = numberarray[i];
        if (current%2 !== 0){
            oddarray.push(current);
        }
    }
    return oddarray
}

console.log(filterOdd([1, 2, 3, 4, 5]));
console.log(filterOdd([10, 23, 37, 46, 52]));
console.log("");
console.log("Opgave 5");
function reverseString(input) {
    let reverseinput = '';
    for (let i = input.length-1; i >= 0 ; i--) {
        reverseinput += input[i];
    }
    return reverseinput;
}
console.log(reverseString('JavaScript'))
console.log("");
console.log("Opgave 6");

function flatten(input) {
   return input.flat(1);
}

console.log(flatten([[1, 2], [3, 4], [5]]))

console.log('ser lige om jeg kan flatten den uden .flat functionen')

function flattenFor(input) {
    let comboarray = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            comboarray.push(input[i][j]); //Spurgte chat om denne, for jeg kunne ikke finde ud af hvorfor input[j] ikke virkede.
        }

    }
    return comboarray
}
console.log(flattenFor([[1, 2], [3, 4], [5]]))

console.log("");
console.log("Opgave 7");

const changetext = document.querySelector('#changeTextButton');
const text = document.querySelector('#text');

changetext.addEventListener('click', () =>
    text.innerHTML = "Dette er en helt ny og mega sej tekst!"
);

console.log('se index fil');
console.log("");
console.log("Opgave 8");

const countbutton = document.querySelector('#clickButton');
const counter = document.querySelector('#clickCount');

countbutton.addEventListener('click', () =>
    counter.innerHTML ++
);

console.log('se index fil');
console.log("");
console.log("Opgave 9");

