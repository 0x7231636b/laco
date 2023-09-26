import { newNumber } from "../components/Dice";

const LIMIT = 1000000;
const DELTA = 2000;
const DICE_FACES = 6;
const averageFaceCount = LIMIT / DICE_FACES;

describe("Random number test", () => {
  it("is equally distributed after rolling the dice a lot", () => {
    const numbersMap = createMap();

    var counter = LIMIT;
    while (counter--) {
      const currentValue = newNumber();
      const numberCount = numbersMap.get(currentValue);
      if (numberCount === undefined || numberCount === null)
        throw new Error(
          "Check if definition of newNumber() has changed or check createMap() setup in test file Dice.test.ts"
        );

      numbersMap.set(currentValue, numberCount + 1);
    }

    numbersMap.forEach((value, key) => {
      expect(deltaInRange(value)).toBeTruthy();
    });
  });

  function deltaInRange(valueToCheck: number) {
    const deltaInRange = Math.abs(valueToCheck - averageFaceCount) < DELTA;
    if (!deltaInRange) {
      console.error(
        `Delta is out of range with value ${valueToCheck - averageFaceCount}`
      );
    }
    return deltaInRange;
  }

  function createMap() {
    const numbersMap = new Map<number, number>();

    for (var i = 1; i <= DICE_FACES; i++) {
      numbersMap.set(i, 0);
    }

    return numbersMap;
  }
});
