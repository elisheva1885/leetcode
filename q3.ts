function maximumWealth(accounts: number[][]): number {
    let rowSum = 0;
    let max = 0;

    accounts.forEach((account) => {
            account.forEach((acconutVal) => {
                 rowSum += acconutVal
            })
            max = Math.max(rowSum, max)
            rowSum=0;
    })
    return max;
};


console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));

