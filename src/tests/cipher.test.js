import { getRandomMultiShift } from "../modules/cipher";

test("Dispays A Random Multi-Shift: ", () => {
    const shifts = getRandomMultiShift(3);
    expect(shifts).toBe(shifts);
});