//Count vowels

function getVowelCount(string: string) {
    let count = 0;
    const vowels = "aeiouy";

    for (const char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count === 0 ? "NO VOWELS FOUND" : count
}
    


console.log(getVowelCount("aaaabbbbccceee"))
console.log(getVowelCount("bbb"))
console.log(getVowelCount('abracadabra') )// 5