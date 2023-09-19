import { newNumber } from "../components/dice";

const LIMIT = 1000000;
const DICE_FACES = 6;

describe("Random number test", () => {
  it("is equally distributed after rolling dice a lot", () => {
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

    const delta = 10000;
    const averageFaceCount = LIMIT / DICE_FACES;

    const deltaInRange = (valueToCheck: number) => {
      return (
        valueToCheck > averageFaceCount - delta &&
        valueToCheck < averageFaceCount + delta
      );
    };

    numbersMap.forEach((value, key) => {
      expect(deltaInRange(value));
    });
  });
});

function createMap() {
  const numbersMap = new Map<number, number>();

  for (var i = 1; i <= DICE_FACES; i++) {
    numbersMap.set(i, 0);
  }

  return numbersMap;
}
