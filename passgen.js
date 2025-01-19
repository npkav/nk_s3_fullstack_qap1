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



//////////////////
// character sets
////////////////
const charAlphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charAlphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charNumeric =    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charSpecial =    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ":", ";", "<", ">", "?", ".", ",", "/", "~", "`"];



//////////////////////////
// password length params
////////////////////////
const defaultPassLength = 8; // default length
const minPassLength = 6; // minimum length
const maxPassLength = 64; // maximum length

let passLength = defaultPassLength; // initialize pass length as default



///////////////
// valid flags
/////////////
const validFlags ={
    "--help": true,
    "--h": true,
    "--lower": true,
    "--l": true,
    "--low": true,
    "--upper": true,
    "--u": true,
    "--up": true,
    "--number": true,
    "--n": true,
    "--num": true,
    "--special": true,
    "--s": true,
    "--spec": true,
    "--all": true,
    "--a": true,
};



/////////////////
// help function
///////////////
function help() {
    // introduction
    console.log("\nദ്ദി(ᵔᗜᵔ)づ Howdy partner!\n");
    console.log("Looks like you need some help generating a password!");
    console.log("This application operates based on command line arguments.\n");

    console.log("You can add any or all of the following flags to specify the\n" +
                "character sets you want to use in your password:\n");

    // flag list
    console.log("  --help, --h               Displays help menu");
    console.log("  --lower, --l, --low       Includes lowercase letters");
    console.log("  --upper, --u, --up        Includes uppercase letters");
    console.log("  --number, --n, --num      Includes numbers");
    console.log("  --special, --s, --spec    Includes special characters");
    console.log("  --all, --a                Includes all characters");
    console.log("    ["+minPassLength+"-"+maxPassLength+"]                  Sets the password length to a value between "+minPassLength+" and "+maxPassLength);
    console.log("");

    // example command
    console.log("To generate a password, navigate to the directory containing\n" +
                "this script and run the command with the flags you want to use:\n");
    console.log("For example, to generate a password with 24 characters that includes\n" +
                "lowercase letters and numbers, you would use the following command:\n");
    console.log(" > node passgen --lower --num 24\n");

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



///////////////////////////////
// validate arguments function
/////////////////////////////
function validateArg(arg) {
    // check if argument is a valid flag
    if (arg.startsWith('--')) {
        if (validFlags[arg]) { // if flag is valid, return
            return;
        }
        console.log("ERROR: Invalid flag:"+arg+"\n" +
                    "Please use --help or --h for a list of valid flags.");
        process.exit(1); // if flag is not valid, throw error and exit program
    }

    // check if argument is a number
    let lengthValue = parseInt(arg); // parse argument as integer
    
    if (isNaN(lengthValue)) { // if not a number, throw general invalid input error and exit program
        console.log("ERROR: Invalid input:"+arg+"\n" +
                    "Please use --help or --h for a list of valid flags.");
        process.exit(1);
    }
    if (lengthValue < minPassLength) { // if less than minimum length, throw error and return minimum length
        console.log("ERROR: Value "+arg+" is less than minimum length.\n" +
                    "The minimum length of "+minPassLength+" will be used.");
        return minPassLength;
    }
    if (lengthValue > maxPassLength) { // if greater than maximum length, throw error and return maximum length
        console.log("ERROR: Value "+arg+" is greater than maximum length.\n" +
                    "The maximum length of "+maxPassLength+" will be used.");
        return maxPassLength;
    }
    return lengthValue; // return valid length value
}



/////////////////
// main function
///////////////
function main() {
    // get cli arguments
    const args = process.argv.slice(2);

    // initialize empty character set to be populated by flags
    charSet = [];

    // check for help flag
    if (args.includes('--help') || args.includes('--h')){
        help();
    }

    // validate arguments and check for length number flag
    args.forEach(arg => {
        const validLength = validateArg(arg);
        if (validLength) passLength = validLength;
    });

    // check for character set flags and add to character set
    if (args.includes('--lower') || args.includes('--l') || args.includes('--low')){
        charSet.push(...charAlphaLower);
    }
    if (args.includes('--upper') || args.includes('--u') || args.includes('--up')){
        charSet.push(...charAlphaUpper);
    }
    if (args.includes('--number') || args.includes('--n') || args.includes('--num')){
        charSet.push(...charNumeric);
    }
    if (args.includes('--special') || args.includes('--s') || args.includes('--spec')){
        charSet.push(...charSpecial);
    }
    if (args.includes('--all') || args.includes('--a')){
        charSet = [...charAlphaLower, ...charAlphaUpper, ...charNumeric, ...charSpecial];
    }

    // if no flags provided, use whole character set
    if (charSet.length === 0) {
        charSet = [...charAlphaLower, ...charAlphaUpper, ...charNumeric, ...charSpecial];
    }

    // generate password
    console.log(generatePassword(passLength));

    //console.log(charSet); // TESTING: REMEMBER TO REMOVE
}



// run program
main();