function merge(left: number[], right: number[]) {
    let res: number[] = [];

    while(left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    while(left.length) {
        res.push(left.shift());
    }

    while(right.length) {
        res.push(right.shift());
    }

    return res;
}

function mergerSort (nums: number[]) {
    let len: number = nums.length;
    if (len <= 1) {
        return nums;
    }

    let mid: number = Math.floor(len / 2);
    let left: number[] = nums.slice(0, mid);
    let right: number[] = nums.slice(mid, len);
    
    return merge(mergerSort(left), mergerSort(right));
}
