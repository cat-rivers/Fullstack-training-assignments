import { hello } from "../src/7.1";

test("returns hello world string", ()=> {
  expect(hello()).toBe("hello world")
})
