import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { ShoppingIcon } from "../components/ShoppingIcon";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.menuHeader}>Staple</Text>
      <ShoppingIcon name="Rice"></ShoppingIcon>
      <ShoppingIcon name="Pasta"></ShoppingIcon>
      <ShoppingIcon name="Noodles" isCompleted></ShoppingIcon>
      <ShoppingIcon name="Quinoas" isCompleted={true}></ShoppingIcon>
      <ShoppingIcon name="Beans" isCompleted={true}></ShoppingIcon>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },

  //darkMode colour scheme
  containerDM: {
    flex: 1,
    backgroundColor: theme.colorBlack,
    justifyContent: "center",
  },

  menuHeader: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 100,
  }
});