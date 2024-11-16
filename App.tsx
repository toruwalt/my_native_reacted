import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingList } from "./components/ShoppingList";

export default function App() {
  
  return (
    <View style={styles.container}>
      <ShoppingList name={"Coffee"}></ShoppingList>
      <ShoppingList name={"Tea"}></ShoppingList>
      <ShoppingList name="Juice"></ShoppingList>
      <ShoppingList name="Smoothy"></ShoppingList>
      <ShoppingList name="Soda"></ShoppingList>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  }
});