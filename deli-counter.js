// 1. Write your functions here

let numInLine = 0;

function takeANumber(array, custName) {
    let order = {
        customerName: custName,
        customerNumber: ++numInLine,
    }
    array.push(order);
    console.log(`Welcome, ${order.customerName}. You are number ${order.customerNumber} in line.`)
};


function line(array) {
    if (array.length == 0) {
        console.log('The line is currently empty');
        return 0;
    }
    let stringToAdd = "The line is currently: " + array.map(function (order) {
        let string = `${order.customerNumber}. ${order.customerName} `
        return string;
    }).join(' ');
    console.log(stringToAdd);
};


function nowServing (array){
    if (array.length == 0){
        console.log('There is nobody waiting to be served!');
        return 0;
    }
    numInLine = 0;
    console.log(`Currently serving ${array[0].customerName}.`);
    array.shift();
    array = array.map(function (order){
        order.customerNumber =++ numInLine;
    })
};



// 2. Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"