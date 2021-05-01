console.log('basics connected');
// Typescript will auto error check, and tell you if you have unused vars
// const test;
const numbr: number = 2;
const strg: string = 'tes'
const nuller: null = null;
let undef: undefined;
const bool: boolean = false;

// Types are infered automatically in easy situations!
const str = 'hello';
str.length;

// typescript will warn you if you try to run anything that defies typeing
const num = 1;
// num.length;

// manual typing
const numberOne: number = 1;

//Typescript is extra valuable because of its autodocumentation
/**
 * the : is used to mark the return type of the function
 * if you try to return something not matching the return type
 * the function will fail
*/
const addNumbers = (a: number, b: number, useless: null): number => {
    // try changing the return value to something else.. or dont return
    // typescript will stop you
    return a + b;
}

export const voidFunction = (): void => {
    // does not return anything
}

