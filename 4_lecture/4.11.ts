//Reduce


const arrStr = ['I', 'like', 'to', 'go', 'swimming']


const func = (arr: string[] , sep: string) => {
  const res = arr.reduce((acc ,curr) => 
  `${acc}${sep}${curr}` )
  console.log(res)
}

func(arrStr, "/")
func(arrStr, "--")