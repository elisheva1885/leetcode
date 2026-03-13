function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((max, account)=> {
     return Math.max(account.reduce((rowSum, num)=> {
            return rowSum + num;
        },0), max)
    },0)
};
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));

