import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Dice from "./components/dice";

export default function App() {
  return (
    <View style={styles.container}>
      <Dice callback={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
