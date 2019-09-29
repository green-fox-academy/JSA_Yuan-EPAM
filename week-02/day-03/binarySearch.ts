function binarySearch(target: number, nums: number[]) {
    let head: number = 0;
    let end: number = nums.length - 1;
    let mid: number = Math.floor(head + (end -head) / 2);
    while(head < end) {
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            head = mid + 1;
        } else{
            return mid; 
        }
        mid = Math.floor(head + (end - head) / 2);
    }
    console.log(`target ${target} CANNOT be found!`);
}

