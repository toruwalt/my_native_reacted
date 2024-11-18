import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { ShoppingList } from "../components/ShoppingList";
import { Link, router, useRouter } from "expo-router";

export default function App() {

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Link href={"/pastriesScreen"} style={styles.menuLinks}>
        <Text style={styles.menuHeader}>Go to Pastries</Text>
      </Link>
      <View>
      <ShoppingList name="Coffee"></ShoppingList>
      <ShoppingList name="Tea"></ShoppingList>
      <ShoppingList name="Juice"></ShoppingList>
      <ShoppingList name="Smoothy" isCompleted={true}></ShoppingList>
      <ShoppingList name="Soda" isCompleted={true}></ShoppingList>
      </View>
      
      <TouchableOpacity onPress={() => router.navigate("/stapleScreen")}>
        <Text style={styles.menuHeader}>
          Go to Staples
        </Text>
      </TouchableOpacity>
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
    marginVertical: 50,
  },

  menuLinks: {
    alignSelf: "center",
    marginVertical: 50,
  }
});