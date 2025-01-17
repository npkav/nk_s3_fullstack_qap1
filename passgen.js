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
    "--help": true
};



// help function
function help() {
    console.log("ദ്ദി(ᵔᗜᵔ)づ Howdy partner!");
    console.log("Looks like you need some help generating a password!");
    console.log("This application operates based on command line arguments.");
    process.exit(0);
}



// main function
function main() {
    if (args.includes('--help')) {
        help();
    }
}



// run program
main();