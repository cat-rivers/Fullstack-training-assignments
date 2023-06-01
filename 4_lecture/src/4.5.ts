//callbacks

const sumOfAllNumbers = (callback: (a: number) => void): void => {
    let result = 0;
    let i = 1;
    while (i < 1_000_000_000) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            result = result + i;
        }
        i = i + 1;
    }
    callback(result);
};

function logger(thingToLog: any) {
    console.log(thingToLog);
}

sumOfAllNumbers(logger);
console.log("succeeded")