import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Text style={styles.containerItemText}>Buy Coffee</Text>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => console.log("Pressed")}
          activeOpacity={0.8}
        >
          <Text style={styles.deleteButtonText} >Delete</Text>
        </TouchableOpacity>
        <Pressable style={styles.deleteButton}
        >
          <Text style={styles.deleteButtonText} >Trash</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },

  containerItem: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderColor: theme.borderColor,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerItemText: {
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
  },

  deleteButton: {
    backgroundColor : theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },

  deleteButtonText: {
    color: theme.colorWhite,
    letterSpacing: 1,
    textTransform: "uppercase"
  }
});
