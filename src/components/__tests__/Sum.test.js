import { Add, Mul } from '../Sum'

test("Verify the sum of two number that we pass to the Sum function as argument", () => {
    
    const result = Add(5, 2);


    expect(result).toBe(7)


});

test("Verify the Mul of two number that we pass to the Sum function as argument", () => {
    
    const result = Mul(5, 2);

    expect(result).toBe(10)

});