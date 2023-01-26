import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
          }}
          style={styles.userAvatar}
        />
        
      </View>
      {/* Content */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        style={styles.image}
      />
      {/* Footer */}
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginTop: 80,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
