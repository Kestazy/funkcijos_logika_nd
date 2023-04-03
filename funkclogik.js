// * 1. funkcija hello
function hello () {
    console.log("Hello World");
}

hello();

// * 2. funkcijos patobulinimas
function pasisveikinimas(vardas) {
    console.log(`Hello ${vardas}`)
}

pasisveikinimas('Kastyti');
pasisveikinimas('Giedriau');

// function sveikutis(name) {
//     console.log("Hello " + name)
// }

// sveikutis('Jonai');

// * 3. prabego metai
let vardas = "Zita";
let amzius = 3;

function prabegoMetai() {
    console.log(vardas, ++amzius)
}

prabegoMetai();
prabegoMetai();
prabegoMetai();

// * 4. fizz and buzz funkcija
function fizzAndBuzz(a) {
    switch(a) {
        case "fizz":
            console.log("Buzz");
            break;
        case "buzz":
            console.log("Fizz");
            break;
            default:
            console.log("Please provide fizz or buzz");
    }
}

fizzAndBuzz("buzz");

// * 5. maziausias numeris
function maziausias(sk1, sk2, sk3) {
    if(sk1<sk2 && sk1<sk3) {
        console.log(`Maziausias numeris ${sk1}`);
    } else if(sk2<sk3) {
        console.log(`Maziausias numeris ${sk2}`);
    } else {
        console.log(`Maziausias numeris ${sk3}`);
    }
}

maziausias(25, 3, 10);

// * 6. aritmetinis vidurkis
function vidurkis(a, b, c) {
    sum = (a + b + c)/3;
    console.log("Skaiciu vidurkis " +sum);
}

vidurkis(2, 9, 1);

// * 7. akstesnis kintamasis
function vidurkis(num) {
    skai = ++num;
    return ++skai
}

let kintamasis = skai;

vidurkis(2);
console.log(kintamasis);

// ! boolen

function lyginimas(a) {
    return a == 7;
}

console.log(lyginimas(7));