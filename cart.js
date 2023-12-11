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
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


function sumCart(total, item) {
    return total + item.price;
}

const summedPrice = cart.reduce(sumCart, 0);
console.log(summedPrice);


//*****
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


 function calcFinalPrice(tax, couponValue) {
      return summedPrice + (summedPrice * tax) - couponValue;   
}    

console.log(calcFinalPrice(0.1, 10));


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
I would include the properties of name, email, phone number, and addres. 
I Chose these specifically because they are important identifiers for each customer.
If we are looking at takeout orders specifically, it is important to get their name and number 
to verify their identity when picking up and to call them if there are any issues with their order.
I chose the credit card number to accept payment for their order and zipcode to authorize their payment
online or over the phone.

I chose name because most names are letters only.
I chose numbers for the remaining categories because I want to ensure there are no non-number characters entered.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const newCust = {
    name: "string",
    phone: "number",
    creditCard: "number",
    zipcode: "number",
};
