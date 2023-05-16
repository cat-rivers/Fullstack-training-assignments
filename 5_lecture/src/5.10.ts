//TODO find better way to do this

function likes(names: string[]) {
    const numNames = names.length;
    if (numNames === 0) {
        return "no one likes this";
    } else if (numNames === 1) {
        return `${names[0]} likes this`;
    } else if (numNames === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (numNames === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${numNames - 2} others like this`;
    }
}

console.log(likes(["cat", "cam", "johnny", "paul", "marshall"]))
