//Dices



const diceMaker = (sides: number) => {
    return (throws: number) => {
        let res = 0;
        for (let i = 0; i < throws; i++) {
            const rand = Math.floor(Math.random() * sides) +1;
            res = res + rand;
        }

        return res;
    };
};

const d8 = diceMaker(8)
const d6 = diceMaker(6)
console.log(d6(2) + d8(2))


