import React from "react";
import { View, Text, Button } from "react-native";

export function newNumber(): number {
  // Returns a random integer from 1 to 6:
  return Math.floor(Math.random() * 6 + 1);
}

export default function Dice() {
  const [myNumber, setMyNumber] = React.useState(0);

  return (
    <View>
      <Text>{myNumber}</Text>
      <Button title="Reroll" onPress={() => setMyNumber(newNumber())}></Button>
    </View>
  );
}
