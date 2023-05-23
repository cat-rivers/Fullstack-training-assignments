
import {  calculator } from "../src/7.3";


//Happy tests
test('sum of 2 and 3', () => {
    const result = calculator("*", 2,3)
    expect(result).toBe(6)
})

// Test for multiplication'

test("multiplication of 5 by 5", () => {
    const result = calculator("*", 5, 5)
    expect(result).toBe(25)
    console.log(result)
})


test("using \"x\" string instead of * throws erorr", () => {
    const result = calculator("x", 5, 5)
    expect(result).toBe("you cant do that D:")
})

test("when second num param is 0 result is 0", () => {
    const result = calculator("*", 5,0)
    expect(result).toBe(0)
})

test("when first num param is 0 expect 0 ", () => {
    const result = calculator("*", 0, 5)
    expect(result).toBe(0)
})



