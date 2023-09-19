import { StyleSheet, View } from "react-native";
import Dice from "./components/dice";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Dice />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
