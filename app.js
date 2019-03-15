// Async:  Now and Later

(function nowAndLater() {
    console.log('Message to the console');
    return num = 15;
})();

function timesFour(n) {
    console.log(n * 4);
}
setTimeout(() => {
    timesFour(num);
}, 2000);
//////////////////////////////
let words = ['dog', 'cat', 'fish', 'hampster']

function getWords() {

};
console.log(words[0])
setTimeout(() => {
    console.log(words[1])
}, 3000);

setTimeout(() => {
    console.log(words[2])
}, 2000);

setTimeout(() => {
    console.log(words[3])
}, 1000);
////////////////////////////////////////
function countDown(num, callback) {

    if (num >= 1)
        countDown(num - 1);
    setTimeout(() => {
        countDown(5, done)
    }, 1000);


    function done() {
        console.log('I am done')
    };
}
////////////PROMISES 
let vegeFood = true;
let food = {
    sandwich: 'chicken',
    veggies: 'lettuce'
}

let orderingChickenSandwich = new Promise(function (resolve, reject) {
    if (vegeFood = true) {
        resolve(food);
    } else {
        let soldOut = new Error('We are all out');
        reject(soldOut);
    }
    function orderFood() {
        console.log('orderUp')
    };
    orderFood();
})


///////////////////Chaining Promise
let promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = 1;
        resolve(number);
    }, 2000);
})
    .then((number) => {
        console.log(number);
        let number2 = number * 2;
        return number2;
    })
    .then((number2) => {
    console.log(number2);
    let number3 = number2 * 4;
    return number3;
})
    .then((number3) => {
    console.log(number3);
    let number4 = number3 * 6;
    console.log(number4);
});