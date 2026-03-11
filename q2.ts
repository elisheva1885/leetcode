function getConcatenation(nums: number[]): number[] {
    let ans = new Array<number>(nums.length*2)
    let n = nums.length;
    nums.forEach((num,index)=> {
        ans[index] = num;
        ans[index+n] = num
        
    })
    return ans
};


console.log(getConcatenation([1,3,2,1]));
