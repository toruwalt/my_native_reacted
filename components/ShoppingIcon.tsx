import { TouchableOpacity, View, Alert, StyleSheet, Text, Pressable } from "react-native";
import { theme } from "../theme";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  name: string;
  isCompleted?: boolean;
  darkMode?: boolean;
}

export function ShoppingIcon({name, isCompleted, darkMode}: Props) {
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
            onDismiss: () => {
              console.log('Alert dismissed');
            },
          }
        )
      };
    
    return (
        <View style={[styles.containerItem,
          isCompleted ? styles.completedContainerItem : undefined]
          }>
          <Entypo name={isCompleted ? "check" : "circle"
                } size={24} color="black" />
          <Text style={[
            styles.containerItemText,
            isCompleted ? styles.completedContainerItemText : undefined
          ]}>{name}</Text>
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
              ]} >
                <Feather name="delete" size={24} color="black" />
              </Text>
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
              <Text style={styles.deleteButtonText}>
                <AntDesign name="delete" size={24} color="black" />
              </Text>
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
    padding: 8,
    borderRadius: 6,
    borderColor: theme.colorBlack,
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