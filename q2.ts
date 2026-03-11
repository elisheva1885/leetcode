function getConcatenation(nums: number[]): number[] {
    return [...nums, ...nums]
};

console.log(getConcatenation([1,2,6,1]));
