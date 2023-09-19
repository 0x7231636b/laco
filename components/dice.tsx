import React from "react";
import { View, Text, Button } from "react-native";

interface DiceProps {
  callback: () => void;
}

function newNumber(): number {
  // Returns a random integer from 1 to 6:
  return Math.floor(Math.random() * 6 + 1);
}

export default function Dice(props: DiceProps) {
  const [myNumber, setMyNumber] = React.useState(0);

  return (
    <View>
      <Text>{myNumber}</Text>
      <Button title="Reroll" onPress={() => setMyNumber(newNumber())}></Button>
      <Button title="Test" onPress={() => {}} />
    </View>
  );
}

// TOdo: write a test with this
function testCode() {
  var counter = 1000000;

  var one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0,
    other = 0;

  while (counter--) {
    const currentValue = newNumber();
    if (currentValue === 1) {
      one++;
    } else if (currentValue === 2) {
      two++;
    } else if (currentValue === 3) {
      three++;
    } else if (currentValue === 4) {
      four++;
    } else if (currentValue === 5) {
      five++;
    } else if (currentValue === 6) {
      six++;
    } else {
      other++;
    }
  }

  console.log(`Ones: ${one}`);
  console.log(`Twos: ${two}`);
  console.log(`Threes: ${three}`);
  console.log(`Fours: ${four}`);
  console.log(`Fives: ${five}`);
  console.log(`Sixes: ${six}`);
  console.log(`Sixes: ${other}`);
}
