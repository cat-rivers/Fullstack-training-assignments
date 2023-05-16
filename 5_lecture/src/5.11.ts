//Above average

function aboveAverage(arr: number[]) {
    const avg = arr.reduce((a, c) => a + c) / arr.length;
    const res = arr.filter(num => num > avg);

    console.log(res);

}
aboveAverage([1,2,4,2,6,8,3,4,1,6,10,4])

aboveAverage([1, 5, 9, 3])