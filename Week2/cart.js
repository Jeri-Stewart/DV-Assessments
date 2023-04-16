///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(`PROBLEM 1`);
console.log(summedPrice);
console.log(`____________`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, tax, couponValue) =>
  (cartTotal * (1 + tax) - couponValue).toFixed(2);

console.log(`PROBLEM 2`);
console.log(calcFinalPrice(100, 0.1, 0));
console.log(calcFinalPrice(100, 0.25, 5));
console.log(`____________`);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Properties that the restaurant will have:

customerName - str; A string  to identify each customer name (customers can have multiple orders). Operations can be grouped by name
items - array; An array to hold  multiple foo items because customers can order multiple items
price - number; math operations can be performed if the data type is a number. Price 
orderStatus - str; A string to identify what process the order is in ie (submitted, cooking, serving, completed)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const cust1 = {
  customerName: `Susan`,
  items: [`Hamburger`, `Fries`, `Sprite`],
  price: 14.95,
  orderStatus: "Submitted",
};

console.log(cust1);
