// sample array to pass into function below
const bestArr = [15, 10, 20, 22, 1, 9]
// const bestArr = [100, 0]
// const bestArr = [1, 2, 3, 4, 5]

// function best() returns the maximum profit possible for buying and selling a stock
const best = (stockArr) => {
    let lowest
    let maxProfit = 0

    for (let i = 0; i < bestArr.length; i++) {
        if (i === 0 || stockArr[i] < lowest) {
            lowest = stockArr[i]
        }

        let currentProfit = stockArr[i] - lowest;

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit
        }   
    }
        return maxProfit
    }

console.log(best(bestArr))