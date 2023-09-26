import { StyleSheet, View, Text, Button } from "react-native";
import Dice from "./components/Dice";
import styled from "styled-components";
import VerbText from "./components/VerbText";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <VerbText />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Text>1: 1st person singular</Text>
      <Text>2: 2nd person singular</Text>
      <Text>3: 3rd person singular</Text>
      <Text>4: 1st person plural</Text>
      <Text>5: 2nd person plural</Text>
      <Text>6: 3rd person plural</Text>
      <Spacer />
      <Dice />
      <Spacer />
      <Button title="show solution" onPress={() => {}} />
    </View>
  );
};

export default App;

// TODO: Fix typescript errors
const Spacer = styled.View`
  padding-top: 0px;
  padding-bottom: 30px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
