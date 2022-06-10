# Arrays-and-Looping

Arrays-and-Looping is an HTML5 webpage that uses JavaScript loops and arrays to convert an inputted number into an output with specific substitutions based on predetermined rules.

## Contributors

Daniel Ware <waredanielb@gmail.com>

## Link

https://github.com/waredaniel/Arrays-and-Looping

# Technologies Used

HTML5, CSS, Bootstrap, Javascript, jQuery 3.6.0

## Application Setup

1. Clone repository to your desktop. 
2. Navigate to 'Arrays-and-Looping' folder. 
3. Open the index.html file in your web browser.

## GitHub Site



## Known Bugs

None

## Copyright

Daniel Ware 2022

## License

MIT

## Testing

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: robogersHood(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of strings from 0 to the user's inputted number"
code robogersHood(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "If a 3 is encountered is should be replaced by a  "Won't you be my neighbor?"
code stringChanger(5);
Expected Output: ["0", "1", "2", "Won't you be my neighbor?", "4", "5"]

Test: "If a number without a 3 is encountered it should be returned unchanged"
code stringChanger(5);
Expected Output: ["0", "1", "2", "Won't you be my neighbor?", "4", "5"]

Test: "If a 2 is encountered is should be replaced by a  "Boop!"
code stringChanger(5);
Expected Output: ["0", "1", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test: "If a 1 is encountered is should be replaced by a  "Beep!"
code stringChanger(5);
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]