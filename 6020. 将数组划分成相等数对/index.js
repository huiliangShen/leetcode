var divideArray = function(nums) {
    let total = 2;
    nums.sort((a, b) => a - b);
    // const map = new Map();
    for(let i = 0;i<nums.length;i = i + total) {

        for(let j = i;j < i + total - 1;j++) {
            if (nums[j] !== nums[j + 1]){
                return false
            }
        }
    }
    return true;
}

let nums = [1,2,3,4]

console.log(divideArray(nums))