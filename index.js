// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// Input

// the initial population is p0 = 1000
// the population increase by percent = 2% per year
// the new inhabitants come to live in the town is 50
// the target population is p = 1200

// function yearToReactPopulation(p0, percent, aug, p) {
//   let years = 0;
//   while (p0 < p) {
//     p0 += (p0 * percent) / 100 + aug;
//     years++;
//   }
//   return years;
// }
// console.log(yearsToReachPopulation(1000, 2, 50, 1200));

function reverseString(str) {
  return str.split("").reverse("").join("");
}
console.log(reverseString("Hey there!"));

function MaxNum() {
  let input = [4, 7, 1, 9, 3, 18];
  let maxNum = input[0];
  let i = 1;
  while (i < input.length) {
    if (input[i] >= maxNum) {
      maxNum = input[i];
    }
    i++;
  }
  return maxNum;
}
console.log(MaxNum());

// this function return a boolean value, if the string is a palindrome it will return true, otherwise it will return false.
function CheckIfPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(CheckIfPalindrome("madam"));

function findTheVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let i = 0;
  str = str.toLowerCase();
  while (i < str.length) {
    if (vowels.includes(str[i])) {
      count++;
    }
    i++;
  }
  return count;
}
console.log(findTheVowels("Hey there!"));
