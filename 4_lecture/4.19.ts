// Array Randomizer


const array: number[] = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];

function shuffle(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffle(array));