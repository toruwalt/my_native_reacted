import { TouchableOpacity, View, Alert, StyleSheet, Text, Pressable } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
  darkMode?: boolean;
}

export function ShoppingList({name, isCompleted, darkMode}: Props) {
    const handleDeleteClick = () => {
        Alert.alert(
          "Delete Alert",
          `Do you want to delete ${name}?`,
          [
            {
              text: "Yes",
              onPress: () => console.log(`${name} deleted`),
              style: "destructive",
            },
            { text: 'NO', onPress: () => console.log('NO Pressed, ')
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
          `${name} has been permanently deleted`,
          [],
          {
            cancelable: true,
            onDismiss: () => console.log('Alert dismissed'),
          }
        )
      };
    
    return (
        <View style={[styles.containerItem,
          isCompleted ? styles.completedContainerItem : undefined]
          }>
          <Text style={[
            styles.containerItemText,
            isCompleted ? styles.completedContainerItemText : undefined
          ]}>Buy {name}</Text>
          <View style={styles.containerButtonsBox}>
            <TouchableOpacity 
            style={[
              styles.deleteButton,
              isCompleted ? styles.completedDeleteButton : undefined
            ]}
            onPress={() => 
              {
                console.log("Delete Pressed");
                handleDeleteClick();
              }
            }
            activeOpacity={0.8}
            >
              <Text style={[
                styles.deleteButtonText
              ]} >Delete</Text>
            </TouchableOpacity>
            <Pressable
              style={
                [
                  styles.deleteButton,
                  isCompleted ? styles.completedDeleteButton: undefined
                ]
              }
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
      </View>
    );

}

const styles = StyleSheet.create({
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
  },

  containerButtonsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200
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
  },
  
  //isCompleted colour scheme
  completedContainerItem: {
    backgroundColor: theme.greyC,
    borderColor: theme.greyD,
  },

  completedContainerItemText: {
    color: theme.greyA,
    textDecorationLine: "line-through"
  },

  completedDeleteButton: {
    backgroundColor: theme.greyA,
  },
});