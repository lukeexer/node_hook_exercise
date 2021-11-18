import { addTwoNumbers } from "./math";

test('The result of addTwoNumbers will be 5 when use 3 and 3.', () => {
    const expected = 5;
    const result = addTwoNumbers(3, 2);
    expect(result).toBe(expected);
});