//Find


const names = [
    'Murphy',
    'Hayden',
    'Parker',
    'Arden',
    'George',
    'Andie',
    'Ray',
    'Storm',
    'Tyler',
    'Pat',
    'Keegan',
    'Carroll'
]

const res = names.find(
    (name) =>
        name[name.length - 1] === "t" && name.length === 3
);

console.log(res)

export {}