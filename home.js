///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

const greetUser = (username) => console.log(`Welcome back, ${username}`);


//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

//Try using this
// function greet(person, beforeNoon, afterMidnight = false) {
//     if (beforeNoon) {
//       return `Good morning, ${person}!`;
//     } else if (afterMidnight) {
//       console.log(`Don't wake ${person}, they're asleep!`);
//     } else {
//       return `Hello, ${person}!`;
//     }
//   }

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]
// //I want to loop through each item of the array and compare it to the zipcode input
// //If the zipcode is found, return a string
// //If not, return alt string
// let goodZip = [];
// function canWeDeliver(zipcode) {
//     for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
//         while (zipcode === deliveryAreaZipCodes[i]) {
//             goodZip.push(deliveryAreaZipCodes);
//             console.log(`You're in our delivery zone!`); break;
//         }
//     }
//  return "Sorry, we can't deliver to that address";
// }

// function canWeDeliver(zipcode) {
//     for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
//         if (zipcode === deliveryAreaZipCodes[i]) {
//             goodZip.push([i]);

//                          } else if {
//                                  //console.log("Sorry, we can't deliver to that address");
//                //console.log(canWeDeliver(85205));
//     while (true) {
//         if (zipcode === canWeDeliver); {
//             console.log(`You're in our delivery zone!`)
//     } //else {
//     while (zipcode !== canWeDeliver); { 
//     console.log("Sorry, we can't deliver to that address")

//       // }  if (zipcode !== canWeDeliver) {
//      }
//     }
// }   

//     for (let i in deliveryAreaZipCodes) {
//         
// }
//      for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
//         if (zipcode === deliveryAreaZipCodes[i]) {
//             console.log(`You're in our delivery zone!`)
//         } else {
//             console.log("Sorry, we can't deliver to that address")
//             //return false;
//         }
//     }
// }
     


//      (let i = 0; i < deliveryAreaZipCodes.length; i++) { 
//         if (deliveryAreaZipCodes[i] === zipcode) {
//             console.log(`You're in our delivery zone!`);
//         } else if (deliveryAreaZipCodes[i] !== zipcode) { 
//             console.log("Sorry, we can't deliver to that address");
//         }

//     }
// }


// let i = 0;
// function canWeDeliver(zipcode) {
//     while(canWeDeliver[i]) {
//         zipcode = canWeDeliver[i];
//     console.log("You're in our delivery zone!");
//     }
//     if(zipcode !== canWeDeliver) {
//     console.log("Sorry, we can't deliver to that address");
//     }
// }

// // const myZip = deliveryAreaZipCodes.filter(canWeDeliver);
// canWeDeliver(85205);



/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

function canWeDeliverTwo(zipcode) {
    if (deliveryAreaZipCodes.includes(zipcode)) {
        console.log("You're in our delivery zone!");
    } else {
        console.log("Sorry, we can't deliver to that address");
    }
}

   console.log(canWeDeliverTwo(85203));
    // CODE HERE


//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: 'This deal lasts until the end of March!'
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.

    (Hint: If you don't remember the `replace` method, there is an example
    in the handout for the "Intro to JS" lecture)
*/



const updated = deals[0].title.replace('15% Off!', '10% Off!');
console.log(deals, updated);


/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.
*/

const updatedDeals = deals[1].desc.replace('March', 'April');
console.log(deals, updatedDeals);