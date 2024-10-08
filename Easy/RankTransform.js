// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.
 

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

var arrayRankTransform = function (arr) {
  let hashMap = {};
  let sortedArr = [...arr].sort((a, b) => a - b);
  let rank = 1;

  // Assign ranks to elements in sortedArr
  for (let num of sortedArr) {
    if (!hashMap[num]) {
      hashMap[num] = rank++;
    }
  }
  // Use the hashMap to assign ranks to the original array
  return arr.map((num) => hashMap[num]);
};
