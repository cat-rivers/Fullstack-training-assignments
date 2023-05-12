//Map

const words = [
    'city',
    'distribute',
    'battlefield',
    'relationship',
    'spread',
    'orchestra',
    'directory',
    'copy',
    'raise',
    'ice'
]

const reversedWords = words.map((word) => word.split("").reverse().join(""))
console.log(reversedWords)