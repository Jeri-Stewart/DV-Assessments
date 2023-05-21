// 1. Sum Zero
function addToZero(arr) {
  let value = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        value = true;
        break;
      }
    }
    if (value) break;
  }
  return value;
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// Runtime: O(n^2)

/*####################################################################*/

// 2. Unique Characters
function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}
console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

// Runtime: O(n)

/*####################################################################*/

// 3. Pangram Sentence
function isPangram(sentence) {
  let lowerSentence = sentence.toLowerCase().split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let char of lowerSentence) {
    if (alphabet.includes(char)) {
      let i = alphabet.indexOf(char);
      alphabet.splice(i, 1);
    }
  }
  if (alphabet.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// Runtime: O(n)

/*####################################################################*/

// 4. Longest Word
function findLongestWord(arr) {
  let longestWord = undefined;
  let counter = 0;
  for (let str of arr) {
    if (str.length > counter) {
      longestWord = str;
      counter = str.length;
    }
  }
  return console.log(counter);
}

findLongestWord(["hi", "hello"]);

// Runtime: O(n)
