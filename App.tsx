import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Text style={styles.containerItemText}>Buy Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgorundColor,
    justifyContent: "center",
  },

  containerItem: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderColor: theme.borderColor,
    borderBottomWidth: 1,
  },

  containerItemText: {
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
  },
});
