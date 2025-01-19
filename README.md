Howdy! This is a simple password generator utilizing Node.js CLI flags that I am creating for my Full Stack JavaScript QAP 1.

This README will be updated as I continue to work on this project with instructions on how to use the password generator
as well as archiving my plaintext changelog.


--------------------------------

## How to Use

This is a command line application. You must run it by navigating to the directory containing the passgen.js file and running
the program along with any flags you wish to use.

For example, we will use node to run the ```passgen``` script along with the ```--help``` flag to display the help menu:
```
node passgen --help
``` 

### Available Flags:

Below is a list of available flags you can use with the passgen script, as well as a description of what each flag does:

- --help, --h:                 Displays help menu.
- --lower, --l, --low:         Includes lowercase letters in password generation.
- --upper, --u, --up:          Includes uppercase letters in password generation.
- --num, --n, --num:           Includes numbers in password generation.
- --special, --s, --spec:      Includes special characters in password generation.
- --all, --a:                  Includes all characters in password generation.
-   [6-64]                     Value between 6 and 64 to determine custom password length.

To generate a password with 24 characters that includes lowercase letters and numbers, you would use the following command:
```
node passgen --lower --n 24
```
Output:
```
 > pa55w0rdpa55w0rdpa55w0rd
```

Fun fact! Under the same parameters, you have a 1 in 22,490,000,000,000,000,000,000,000,000,000,000,000,000 chance of getting the same identical password in any given generation! If you ran 100 generations per minute, it would, on average, take you roughly 13.8 billion years to get the same password twice.

--------------------------------

# Version History/Changelog

### 0.0.6:
    - Added shorthand flags for all existing flags.
    - Updated help menu to display shorthand flags.
    - Updated README.md to display shorthand flags and fun fact.
    - Updated README.md and help menu example commands to showcase shorthand flags.
    - Updated README.md formatting.


### 0.0.5:
    - Moved master character set array into main function.
    - Master character set array now populated by pushing other character sets into it.
    - Added password length flag and functionality.
    - Added password length validation and error handling.
    - Added valid flag check for all flags.
    - Updated help menu available flags section and example command.
    - Updated README.md available flags section and example command.
    - Reordered code and updated comments for functionality and readability.
    - Added .gitignore file to ignore commonly-ignored file types.


### 0.0.4:
    - Added lowercase, uppercase, numbers, and special character sets.
    - Added flags for lower, upper, num, special, and all character sets to be used in generation.
    - Master character set array now populated by using spread operator to combine other character set arrays.
    - Added password legnth parameters to be used in teh future.
    - Updated help menu to display available flags and example command.
    - Updated README.md available flags section, added example command.
    - Organized code and added comment headers for readability.


### 0.0.3:
    - Created placeholder character set array to draw from for password generation.
    - Set default password length of 8.
    - Added basic password generation functionality.
    - Updated README.md with available flags section.


### 0.0.2:
    - Added basic CLI flag functionality.
    - Added help menu placeholder.
    - Added script to create shorthand node passgen command in package.json.
    - Updated instructions in README.md.


### 0.0.1:
    - Initial release.


--------------------------------