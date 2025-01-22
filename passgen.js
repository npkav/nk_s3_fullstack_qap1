// Nickolas Kavanagh - SD12
// Semester 3 - Full Stack JavaScript
// 2025/01/16 - 2025/01/23

// Create a Command-Line Interface (CLI) application in Node.js that generates
// passwords for users based on arguments they provide via flags.



///////////
// imports
/////////
const process = require("process");



//////////////////
// character sets
////////////////
const chars = {
    alphaLower:  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    alphaUpper:  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numeric:     ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special:     ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ":", ";", "<", ">", "?", ".", ",", "/", "~", "`"]
};

let charSet = []; // initialize character set as empty array



///////////////
// valid flags
/////////////
const flags = { // object to store valid flags
    help:     ["--help", "--h"],
    lower:    ["--lower", "--l", "--low"],
    upper:    ["--upper", "--u", "--up"],
    number:   ["--number", "--n", "--num"],
    special:  ["--special", "--s", "--spec"],
    all:      ["--all", "--a"]
};



//////////////////////////
// password length params
////////////////////////
const defaultPassLength = 8; // default length
const minPassLength = 6; // minimum length
const maxPassLength = 64; // maximum length

let passLength = defaultPassLength; // initialize pass length as default



///////////////////////////////
// validate arguments function
/////////////////////////////
function validateArg(arg) {
    // check if argument is a valid flag
    if (arg.startsWith("--")) {
        if (Object.values(flags).flat().includes(arg)) { // if arg is present in flattened flags object, return true
            return;
        }
        console.log("ERROR: Invalid flag:"+arg+"\n" + // else throw error and exit program
                    "Please use --help or --h for a list of valid flags.");
        process.exit(1);
    }

    // check if argument is a number, if not throw error and exit program
    if (isNaN(arg)) {
        console.log("ERROR: Invalid input:"+arg+"\n" +
                    "Please use --help or --h for a list of valid flags.");
        process.exit(1);
    }
    let lengthValue = parseInt(arg); // else parse as integer

    // if argument value is less than minimum length, throw error and return minimum length
    if (lengthValue < minPassLength) {
        console.log("ERROR: Value "+arg+" is less than minimum length.\n" +
                    "The minimum length of "+minPassLength+" will be used.");
        return minPassLength;
    }
    // if argument value is greater than maximum length, throw error and return maximum length
    if (lengthValue > maxPassLength) {
        console.log("ERROR: Value "+arg+" is greater than maximum length.\n" +
                    "The maximum length of "+maxPassLength+" will be used.");
        return maxPassLength;
    }

    // if argument is valid length, return it
    return lengthValue;
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
    console.log(" > node passgen --lower --n 24\n");
    console.log("Output:\n");
    console.log(" > pa55w0rdpa55w0rdpa55w0rd\n");

    // exit program
    process.exit(0);
}



/////////////////
// main function
///////////////
function main() {
    // get cli arguments
    const args = process.argv.slice(2);

    // check if any of the args match one of the flags in flags.help, if so call help()
    if (args.some(arg => flags.help.includes(arg))){
        help();
    }

    // validate arguments and check for length number flag
    args.forEach(arg => {
        const validLength = validateArg(arg);
        if (validLength) passLength = validLength;
    });

    // check for character set flags in args using .some(), then add appropriate character set
    if (args.some(arg => flags.lower.includes(arg))){
        charSet.push(...chars.alphaLower);
    }
    if (args.some(arg => flags.upper.includes(arg))){
        charSet.push(...chars.alphaUpper);
    }
    if (args.some(arg => flags.number.includes(arg))){
        charSet.push(...chars.numeric);
    }
    if (args.some(arg => flags.special.includes(arg))){
        charSet.push(...chars.special);
    }
    if (args.some(arg => flags.all.includes(arg))){
        charSet = [...chars.alphaLower, ...chars.alphaUpper, ...chars.numeric, ...chars.special];
    }

    // if no flags provided, use whole character set
    if (charSet.length === 0) {
        charSet = [...chars.alphaLower, ...chars.alphaUpper, ...chars.numeric, ...chars.special];
    }

    // generate password
    console.log(generatePassword(passLength));

    //console.log(charSet); // TESTING: REMEMBER TO REMOVE
}



// run program
main();