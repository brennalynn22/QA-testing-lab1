let myFunction= require('./function')

test('Return Two test', ()=> {
    expect(myFunction.returnTwo()).toBe(2)
}),

test("Greeting Test", () => {
    expect(myFunction.greeting('James')).toBe('Hello,James.')
} 
),

test("Greeting Test", () => {
    expect(myFunction.greeting('Jill')).toBe('Hello,Jill.')
}),

describe("math functions", () =>{

    test("can you add 2 numbers", () => {
        expect(myFunction.add(1,3)).toBe(4)
    })
    test("subtract 2 numbers", () => {
      expect(myFunction.subtract(6,3)).toBe(3)
    })

    test("multiply 2 numbers", () => {
     expect(myFunction.multiply(6,3)).toBe(18)
    });
    test("divide 2 numbers", () => {
        expect(myFunction.divide(6,3)).toBe(2)
    })
})

