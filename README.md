Howdy! This is a simple password generator utilizing Node.js CLI flags that I am creating for my Full Stack JavaScript QAP 1.

This README will be updated as I continue to work on this project with instructions on how to use the password generator
as well as archiving my plaintext changelog.


--------------------------------

## How to Use

This is a command line application. You must run it by navigating to the directory containing the passgen.js file and running
the program along with any flags you wish to use. For example, we will use node to run the ```passgen``` script along with
the ```--help``` flag to display the help menu:
```
node passgen --help
``` 

### Available Flags:

Below is a list of available flags you can use with the passgen script, as well as a description of what each flag does.

- --help:           Displays help menu.
- --lower:          Includes lowercase letters in password generation.
- --upper:          Includes uppercase letters in password generation.
- --num:            Includes numbers in password generation.
- --special:        Includes special characters in password generation.
- --all:            Includes all characters in password generation.


--------------------------------

## Version History/Changelog

- 0.0.4:
    - Added lowercase, uppercase, numbers, and special character sets.
    - Added flags for lower, upper, num, special, and all character sets to be used in generation.
    - Master character set array now populated by using spread operator to combine other character set arrays.
    - Added password legnth parameters to be used in teh future.
    - Updated help menu to display available flags and example command.
    - Updated README.md available flags section, added example command.
    - Organized code and added comment headers for readability.


- 0.0.3:
    - Created placeholder character set array to draw from for password generation.
    - Set default password length of 8.
    - Added basic password generation functionality.
    - Updated README.md with available flags section.


- 0.0.2:
    - Added basic CLI flag functionality.
    - Added help menu placeholder.
    - Added script to create shorthand node passgen command in package.json.
    - Updated instructions in README.md.


- 0.0.1:
    - Initial release.


--------------------------------