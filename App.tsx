import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Alert } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDeleteClick = () => {
    Alert.alert(
      "Delete Alert",
      "Do you want to delete event?",
      [
        {
          text: "Yes",
          onPress: () => console.log("Item deleted"),
          style: "destructive",
        },
        { text: 'NO', onPress: () => console.log('NO Pressed')
        },
      ],
      // These are the options.
      // Cancelable = A click outside the alert will dismiss the alert
      // onDismiss = Function to run aswhen alert is dismissed
      {
        cancelable: true,
        onDismiss: () => console.log('Alert dismissed'),
      }
    )
  };

  const moveToTrash = () => {
    Alert.alert(
      // Alert without buttons
      "Moved to Trash",
      "This has been permanently deleted",
      [],
      {
        cancelable: true,
        onDismiss: () => console.log('Alert dismissed'),
      }
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Text style={styles.containerItemText}>Buy Coffee</Text>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => 
            {
              console.log("Delete Pressed");
              handleDeleteClick();
            }
          }
          activeOpacity={0.8}
        >
          <Text style={styles.deleteButtonText} >Delete</Text>
        </TouchableOpacity>
        <Pressable
          style={styles.deleteButton}
          onPress={() => 
            {
              console.log("Trash Pressed");
              moveToTrash();
            }
          }
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
