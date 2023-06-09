

const numPeople = process.argv[2]
const sizeOfGroup = process.argv[3]

//basic solution
const groupSizeOne = (people, size) => {
  const result = Math.ceil(people / size);
  console.log(`number of groups: ${result}`);
};

groupSizeOne(numPeople, sizeOfGroup)

//Basic solution without Math library

const groupSizeTwo = (people, size) => {
  const groups = people / size;
  let result;
  const leftover = groups % 1;
   leftover ? (result = groups - leftover + 1) : (result = groups);

  console.log(`number of groups: ${result}`);
};

groupSizeTwo(numPeople, sizeOfGroup)



//Extra...not completed
const groupSizeThree = (people, size) => {
  const div = people/size
  const mod = div % size
  const  round = ((1 - (div % 1)) + mod)//logic flawed, review algorithm
  const result = (div - mod) + round

  console.log(`Number of groups: ${result}`)
}


// groupSizeThree(numPeople, sizeOfGroup)

