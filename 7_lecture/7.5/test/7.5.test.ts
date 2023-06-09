import {  calculator } from "../src/7.3";
//Division tests

describe("division", () => {
  it("returns 2 when  6 divided by 3", () =>{
      const result  = (calculator("/", 6,3))
      expect(result).toBe(2)
  })

  it("returns 4 when  8 divided by 2", () =>{
      const result  = (calculator("/", 8,2))
      expect(result).toBe(4)
  })

})

describe('division', () => {
  it('throws error', () => {
      expect(calculator(".", 6,2)).toBe("you cant do that D:")
  })

  it('throws error', () => {
      expect(calculator("/", 6, 0)).toBe(Infinity)
  })
  
})


describe("multiply", () => {
  it("returns 6 when 2 * 3", () =>{
      const result  = (calculator("*", 2,3))
      expect(result).toBe(6)
  })
})

describe("add", () => {
  it("returns 5 when 2 + 3", () =>{
      const result  = (calculator("+", 2,3))
      expect(result).toBe(5)
  })
})

describe("difference", () => {
  it("returns -1 when 2 - 3", () =>{
      const result  = (calculator("-", 2,3))
      expect(result).toBe(-1)
  })
})