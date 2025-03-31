
//     p0 += (p0 * percent) / 100 + aug;
//   return years;
// }
// console.log(yearsToReachPopulation(1000, 2, 50, 1200));

// function reverseString(str) {
//   return str.split("").reverse("").join("");
// }
// console.log(reverseString("Hey there!"));

// function MaxNum() {
//   let input = [4, 7, 1, 9, 3, 18];
//   let maxNum = input[0];
//   let i = 1;
//   while (i < input.length) {
//     if (input[i] >= maxNum) {
//       maxNum = input[i];
//     }
//     i++;
//   }
//   return maxNum;
// }
// console.log(MaxNum());

// // this function return a boolean value, if the string is a palindrome it will return true, otherwise it will return false.
// function CheckIfPalindrome(str) {
//   let reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }
// console.log(CheckIfPalindrome("madam"));

// function findTheVowels(str) {
//   let count = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   let i = 0;
//   str = str.toLowerCase();
//   while (i < str.length) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }
// console.log(findTheVowels("Hey there!"));

// function ReverseStr(str) {
//   return str.split("").reverse().join("");
// }

// initial population p0
// increase by a given percent yearly
// fixed number of habitant increase aug
// how many years to reach a target population p

function yearsToReachPopulation(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    years++;
  }
  return years;
}
console.log(yearsToReachPopulation(1000, 2, 50, 2000));

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
