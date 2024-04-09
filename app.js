// WHY USE STRIC ?

//  USE STRIC ALWAYS TOP!
// "use stric";
// console.log("HELLO");
// alert("HELLO")

/*Variable*/
// let name;     ----- declare
// name = "abir";       ----- define

// alert(name)
// console.log(name);

// let name = "abir";  //------ei variable ta tokhon use korbo jkhn amra jani ei variable e value tai use hobe!
// console.log(name);

// let name = "abir";
// let age = 18;

// let name = "abir", age = "18";

// let name = "abir";
// let age = "20";

// alert(age);
// alert (name);
// Variable End //

/*Constant*/
// const myName = "Abir";
// alert(myName);

/*Number Data type*/
// let price = 200; //----number
// console.log(price);

// let name = "Abir"; // -----string
// console.log(name);

// let number = 20.200;  // -----floating point number

// 1) Infinity  // infinity hocche emon ekti value ja sobar tekhe boro ----------example = alert (25 / 0);

// 2) NaN  //  emon ekta kichu ke / korte chai jeta number noy ---------example  = "hello"/20

//  let divison = (20 / 0);
// console.log(divison);  ------ infinity

// console.log("hello" / 20); ------Nan

// BigInt boro number use korar jonno use----n shb broeser e kaj korena
/*Number Data type End*/

/*String*/
// let message = "Hello"; //--------string
// console.log(message);

// let name = 'hi';
// alert(name)

/*Backtick*/
// let price = 200;
// let name = `Abir ${price}`; //----------${}
// console.log(name);

// let age = 20;
// let name = "kalu";
// let message = `hello ${name} your age ${age}`
// alert(message)

// let age = 20;
// let name = "kalu";
// let message = "hello "+name+" your age "+age+""; ------------OLD STYLE
// alert(message);
/*Backtick End*/

/*Boolean Type*/
//1 true
//2 false

//  let isFollow = false;
//  alert(isFollow);

//  let isFollow = true;
//  alert(isFollow);
/*Boolean Type End*/

/*Null  Type*/
// let name = null; //Null mane bujhay faka ekti value , ba emon ekti value ja amar jana nai, ba khali
// let name = ""; ------blank
// null--------------- //null mane otar moddhe kono valua ase nai
/*Null End*/

/* Undefind */
// let name = undefined;
// let name;
// alert(name);
// undefined------- mane hocche variable ta ami toiri korechi , kintu variable tar moddhe vaalue asign e hoy nai
/* Undefind  End*/

/* TypeOf Operator */
// let name = "abir";
// console.log(typeof (name));
// console.log(typeof(20));//------function form
//    console.log(typeof name); //---operator form
/* TypeOf Operator End */

/* Prompt and confrim */
// let name = prompt ("enter your name","abir"); ---valua name = argument
// console.log(name);
// alert("hello");
/* Prompt and confrim End */





/* if Statement */
// let myName = "Abir";
// if (myName == "Abir") {
//   alert("hello JS");
// }
// let myName = prompt("enter a nickname");

// if (myName == "something") {
//   alert('Your name is'  + myName);
// }
/* if Statement End */


/* Operand, Unary and Binary Operator */
// Operator +, -, *, /, %, **

// 2 + 5  ---2,5 operand

// let firstNumber = 5;
// console.log(firstNumber);

// let secondNumber = -5; //------Unary operator name hocche nigation Operator

// console.log(secondNumber);

// let firstNumber = 5;
// firstNumber = -firstNumber;

// console.log(firstNumber);

// je somosto operator shb somoy 2 ta operator niye kaj kore tader ke Binary operator bole
// 2 * 5
// let firstNumber = 5;
// let secondNumber = 2;

// let result = firstNumber % secondNumber; // +adition, -substraction operator, *multipication,  /division, %modiolus ba remaindar,**exponentiation
// console.log(result);
/* Operand, Unary and Binary Operator End */






/*In operator*/
// let name = {};
// console.log(name.html); //--------undefined

// let nameList = {
//   html: "name List",
// };

// // console.log("html" in nameList);

// if ("html" in nameList) {
//   console.log("html property exist");
// } else {
//   console.log("html property dosen't exist");
// }
//-----------------------------------------------------------//
// let nameList = {
//     html: "name List",
//   };

// let propName = "html"

// if (propName in nameList) {
//   console.log("html property exist");
// } else {
//   console.log("html property dosen't exist");
// }
/*In operator End*/




/* Object in function */
// let user = {
//     firstName: "Abdullah",
//     lastName: "Abir"
// };
// console.log(user);

// function createUser () {

//     let user = {
//             firstName: "Abdullah",
//             lastName: "Abir"
//         };
//         // console.log(user);
//         // console.log(user['firstName']); .ba[]
// }
// createUser();

//------------------------------------------------------
// function createUser (first_name, last_name) {

//     let user = {
//             firstName: first_name,
//             lastName: last_name
//         };
//         console.log(user.firstName + " " +user.lastName);
//         // console.log(user['firstName']); .ba[]
// }
// createUser("Abdullah", "Abir");
//----------------------------------------------------------
function createUser (firstName, lastName) {

    // let user = {
    //         firstName: firstName,
    //         lastName: lastName
    //     };

    let user = {
        firstName,
        lastName
    };
    return user;
        // console.log(user.firstName + " " +user.lastName);
        // console.log(user['firstName']); .ba[]
} 
let newUser = createUser("Abdullah", "Abir");
console.log(newUser.firstName);
// /* Object in function End */



