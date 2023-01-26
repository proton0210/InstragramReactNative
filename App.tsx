import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary, fontSize: fonts.size.lg }}>
        Hello from Expo!
      </Text>
      <StatusBar style="auto" />
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
