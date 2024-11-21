import { router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.navigate("/user/history")}>
          <Text style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}>
              Go to history
            </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Counter</Text>
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