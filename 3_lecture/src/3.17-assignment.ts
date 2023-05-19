//annoying substring

const str = process.argv[2];
const res = str.split(" ").slice(0, -1).join(" ");

console.log(res);


export {}