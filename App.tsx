import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { theme } from "./theme";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingIcon } from "./components/ShoppingIcon";

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.menuHeader}>Drinks</Text>
      <View>
      <ShoppingList name="Coffee"></ShoppingList>
      <ShoppingList name="Tea"></ShoppingList>
      <ShoppingList name="Juice"></ShoppingList>
      <ShoppingList name="Smoothy" isCompleted={true}></ShoppingList>
      <ShoppingList name="Soda" isCompleted={true}></ShoppingList>
      </View>
      <View>
      <Text style={styles.menuHeader}>Pastries</Text>
      <ShoppingIcon name="Doughnut"></ShoppingIcon>
      <ShoppingIcon name="Meatpie"></ShoppingIcon>
      <ShoppingIcon name="Egg Rolls"></ShoppingIcon>
      <ShoppingIcon name="Spring rolls" isCompleted={true}></ShoppingIcon>
      <ShoppingIcon name="Buns" isCompleted={true}></ShoppingIcon>
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
    marginVertical: 15,
  }
});