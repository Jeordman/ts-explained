console.log('newhotness connected');
interface Person {
    name: string;
    phoneNum: number;
}

// interfaces are used to mock up what MUST be contained in an object
// const obj: Person = {
    // name: 'jeo',
    // phoneNum: 5555555,
// };

// you can have the or operator for type
const obj2: { name: string } | Person = {
    name: "test",
};

// array of arrays
let arr: [][];

// if you want to ignore typescript features you can use any as the type
const badFunction = (arg1: any): any => {
    return arg1;
};

// can use functions as types
const add: Function = function () {};

// function must take in 2 numbers and return a number
type customFunctionType = (number1: number, number2: number) => number;

const newAdd: customFunctionType = (num, num2) => {
    return num + num2;
};

// there is a NEVER type used if you for sure will NEVER return anything
// const neverFunct = (): never => {};

//! tuple --> exactly what you want in each point in the arr
let tuple: [number, string] = [1, "Jeordin"];
// typescript will not stop you from using push tho :/

// ENUM is a replacement for using complicated lettering like ->
const ADMIN = "ADMIN";
const READ_ONLY = "READ_ONLY";
const AUTHOR = "AUTHOR";

// typescript way
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const Jeordin = {
    job: Role.READ_ONLY,
};

if (Jeordin.job === Role.ADMIN) {
    console.log("jeordin is an admin");
}
