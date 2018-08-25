// Match Literal String w/ Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

// Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);

// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // i - ignores case, g - extracts pattern more than once
let result = twinkleStar.match(starRegex);

// Match Anything w/ Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // un. will match any word cotaing the letters "un"
let result = unRegex.test(exampleStr);

// Match Single Character w/ Multiple Possibilites
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

// Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex); 

// Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex);

// Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou3]/ig; 
let result = quoteSample.match(myRegex); 

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

// Find Characters w/ Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.[h1]*>/; 
let result = text.match(myRegex);

// Find One or More Criminals in a Hunt
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/g;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
// Outside of a character set [] ^ is used to search at beginning of strings
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // \w = [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // \W = [^A-Za-z0-9_]
let result = quoteSample.match(nonAlphabetRegex).length;

// Match All Numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // \d = [0-9]
let result = numString.match(numRegex).length;

// Match All Non-Numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\D/g; // \D = [^0-9]
let result = numString.match(numRegex).length;

// Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^\D{2,}\d*$/i; // Change this line
let result = userCheck.test(username);

// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// Match Non-Whitespace
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);

// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result = ohRegex.test(ohStr);

// Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

// Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

// Positive and Negative Lookahead
// Positive - will make sure the element in the search is there, but won't actually match (?=...)
// Negative - will make sure the element in the search is NOT there (?!=...)
let sampleWord = "astronaut";
// First we check to make sure the string is 5+ characters, and then we check that the pattern contains 0+ non-numeric
// characters followed but at least 2 consecutive characters
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
let result = pwRegex.test(sampleWord);

// Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText);
// -- OR --
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let result = huhText.replace(fixRegex, "okey-dokey");

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
// Match white space that occurs 0+ times at the beginning, then match all letters/numbers that occur 1+ times, match the comma and the white space,  then match all letters/numbers that occur 1+ times again, and match the ! and the white space occuring 0+ times.
let wsRegex = /^\s*\w+,\s\w+!\s*/
// Replace string with 'Hello, World!'
let result = hello.replace(wsRegex,"Hello, World!");