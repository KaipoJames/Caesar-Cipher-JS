import { getRandomMultiShift } from "../modules/cipher";
import { encrypt } from "../modules/encrypt";

test("Dispays A Random Multi-Shift: ", () => {
    const shifts = getRandomMultiShift(3);
    expect(shifts).toBe(shifts);
});