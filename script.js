const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    if (currentSum + num <= n) {
      // If adding the current number doesn't exceed the limit, add it to the current subarray
      currentSubarray.push(num);
      currentSum += num;
    } else {
      // If adding the current number exceeds the limit, start a new subarray
      result.push([...currentSubarray]);
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // Add the last subarray to the result
  result.push([...currentSubarray]);

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
