// Nickolas Kavanagh
// SD12 Full Stack JavaScript 
// QAP 1 - Password Generator
// 16/01/2025 - 23/01/2025

// Create a Command-Line Interface (CLI) application in Node.js that generates
// passwords for users based on arguments they provide via flags.



// imports
const process = require('process');



// get cli arguments and set flags
const args = process.argv.slice(2);
const validFlags ={
    "--help": true,
};



// character set
const charSet = ["a", "b", "c", "d", "e", "f", "g", "h"];


// default password length
const defaultPassLength = 8;



// help function
function help() {
    console.log("ദ്ദി(ᵔᗜᵔ)づ Howdy partner!");
    console.log("Looks like you need some help generating a password!");
    console.log("This application operates based on command line arguments.");
    process.exit(0);
}



// generate password function
function generatePassword(passLength) {
    let generatedPass = ""; // initialize generated password as empty string
    for (let i = 0; i < passLength; i++) { // iterate through password length
        generatedPass += charSet[Math.floor(Math.random() * charSet.length)]; // add random character from character set to generated password for each iteration
    }
    return generatedPass; // return generated password
}


// main function
function main() {
    // check for help flag
    if (args.includes('--help')){
        help();
    }

    // run generatePassword with default pass length if no flags provided
    if (args.length === 0) {
        console.log(generatePassword(defaultPassLength));
    }
}



// run program
main();