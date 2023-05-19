// Random async

const getValue = () => {
    return new Promise<number >((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random());
        }, Math.random() * 1500);
    });
};

const get2values = async () => {
    console.log(await getValue(), await getValue())

}

get2values()

//_________________________________


const randomNum =() => {
    return new Promise <number>((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random());
        }, Math.random() * 1500);
    });
}
    
randomNum().then((res1) => {
    randomNum().then((res2) => console.log(res1, res2));
});