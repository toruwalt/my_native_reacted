import { router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.navigate("/user/")}>
          <Text style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}>
              Go to Index
            </Text>
        </TouchableOpacity>
        <Text style={styles.text}>This is transaction history page</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});