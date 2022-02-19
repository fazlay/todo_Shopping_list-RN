import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/Index";

export default function App() {
  return (
    <View>
      <Index />

      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
