// Nickolas Kavanagh
// SD12 Full Stack JavaScript 
// QAP 1 - Password Generator
// 16/01/2025 - 23/01/2025

// Create a Command-Line Interface (CLI) application in Node.js that generates
// passwords for users based on arguments they provide via flags.



///////////
// imports
/////////
const process = require('process');



///////////////
// valid flags
/////////////
const validFlags ={
    "--help": true,
    "--lower": true,
    "--upper": true,
    "--num": true,
    "--special": true,
    "--all": true,
};



//////////////////
// character sets
////////////////
const charAlphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charAlphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ":", ";", "<", ">", "?", ".", ",", "/", "~", "`"];

let charSet = []; // initialize character set as empty array



//////////////////////////
// password length params
////////////////////////
const defaultPassLength = 8; // default length
const minPassLength = 6; // minimum length
const maxPassLength = 64; // maximum length

let passLength = defaultPassLength; // initialize pass length as default



/////////////////
// help function
///////////////
function help() {
    // introduction
    console.log("\nദ്ദി(ᵔᗜᵔ)づ Howdy partner!\n");
    console.log("Looks like you need some help generating a password!");
    console.log("This application operates based on command line arguments.\n");

    console.log("You can also add any or all of the following flags to specify the\n" +
                "character sets you want to use in your password:");

    // flag list
    console.log("  --lower      Includes lowercase letters");
    console.log("  --upper      Includes uppercase letters");
    console.log("  --num        Includes numbers");
    console.log("  --special    Includes special characters");
    console.log("  --all        Includes all characters\n");

    // example command
    console.log("To generate a password, navigate to the directory containing\n" +
                "this script and run the following command:");
    console.log(" > node passgen [flags]\n");

    // exit program
    process.exit(0);
}



//////////////////////////////
// generate password function
////////////////////////////
function generatePassword(passLength) {
    let generatedPass = ""; // initialize generated password as empty string
    for (let i = 0; i < passLength; i++) { // iterate through password length
        generatedPass += charSet[Math.floor(Math.random() * charSet.length)]; // add random character from character set to generated password for each iteration
    }
    return generatedPass; // return generated password
}



/////////////////
// main function
///////////////
function main() {
    // get cli arguments
    const args = process.argv.slice(2);
    
    // check for help flag
    if (args.includes('--help')){
        help();
    }

    // check for character set flags and add to character set
    if (args.includes('--lower')){
        charSet = [...charAlphaLower];
    }
    if (args.includes('--upper')){
        charSet = [...charAlphaUpper];
    }
    if (args.includes('--num')){
        charSet = [...charNumeric];
    }
    if (args.includes('--special')){
        charSet = [...charSpecial];
    }
    if (args.includes('--all')){
        charSet = [...charAlphaLower, ...charAlphaUpper, ...charNumeric, ...charSpecial];
    }

    // if no flags provided, use whole character set and default pass length
    if (args.length === 0) {
        charSet = [...charAlphaLower, ...charAlphaUpper, ...charNumeric, ...charSpecial];
        passLength = defaultPassLength;
    }

    // generate password
    console.log(generatePassword(passLength));
}



// run program
main();