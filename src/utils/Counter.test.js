import 'regenerator-runtime/runtime';
import 'core-js/stable';
import Counter from "./Counter";
import { addTwoNumbers } from "./math";

jest.mock('./math');

test('The default value of count of the counter will be 0', () => {
    const counter = new Counter();
    const expected = 0;

    expect(counter.count).toBe(expected);
});

test('The count will be from 0 become 1 when we execute the increment method.', () => {
    addTwoNumbers.mockReturnValue(1);

    const counter = new Counter();
    const expected = 1;

    counter.increment();

    expect(counter.count).toBe(expected);

});

test('The count will become value of response after executed setCountFromDatabase.', async () => {
    global.fetch = jest.fn().mockResolvedValue(
        { json: () => ({ count: 5 }) }
    );

    const counter = new Counter();
    const expected = 5;

    await counter.setCountFromDatabese();

    expect(counter.count).toBe(expected);

    delete global.fetch;
});