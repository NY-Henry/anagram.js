// Function
function anagramCheker(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // Will return an appropriate boolean whether or not the two strings are anangrams
  let check = true;
  //   Will store individaul letters in string1 with their frequencies
  let str1Obj = {};
  //   Will store individaul letters in string2 with their frequencies
  let str2Obj = {};

  //   Looping Through string1 while creating getting individual letters and adding them to the to the str1Obj
  for (let i = 0; i < str1.length; i++) {
    let count = 0;
    for (let j = 0; j < str1.length; j++) {
      if (str1[i].toLowerCase() === str1[j].toLowerCase()) {
        count++;
      }
    }
    if (count) {
      str1Obj[str1[i]] = count;
    }
  }

  //   Looping Through string1 while creating getting individual letters and adding them to the to the str2Obj
  for (let i = 0; i < str2.length; i++) {
    let count = 0;
    for (let j = 0; j < str2.length; j++) {
      if (str2[i].toLowerCase() === str2[j].toLowerCase()) {
        count++;
      }
    }
    if (count) {
      str2Obj[str2[i]] = count;
    }
  }

  //   Logging the objects to comfirm whether their existence
  console.log(str1Obj);
  console.log(str2Obj);

  //   Checking if str1Obj is equal to str2Obj
  for (const [key, value] of Object.entries(str1Obj)) {
    let foundMatch = false;
    for (const [key2, value2] of Object.entries(str2Obj)) {
      if (key.toLowerCase() === key2.toLowerCase() && value === value2) {
        foundMatch = true;
      }
    }
    if (!foundMatch) {
      console.log(`${key}: ${value} Not found`);

      //   Check becomes false if any letter in str1Obj does match any in the other object
      check = false;
    } else {
      console.log(`${key}: ${value} found 🎉`);
    }
    foundMatch = false;
  }

  //   Returning the resuilt of the check
  return check;
}

// Inputs
const input1 = "liNsteeeee";
const input2 = "slienteeee";
// Function Call
const isAnagram = anagramCheker(input1, input2);

isAnagram
  ? console.log(isAnagram, ` ${input1} and ${input2} are anagrams.`)
  : console.log(isAnagram, ` ${input1} and ${input2} are not anagrams.`);
