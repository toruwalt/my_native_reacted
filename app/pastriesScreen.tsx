import { StyleSheet, View, Text, FlatList } from "react-native";
import { theme } from "../theme";
import { ShoppingIcon } from "../components/ShoppingIcon";
import { ShoppingList } from "../components/ShoppingList";
import { initialShoppingList } from "../app/index";
import { useState } from "react";

const testData = new Array(50)
  .fill(null)
  .map((_, index) => ({
    id: String(index + 1),
    name: `Item ${index + 1}`,
    completed: false
  }));

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        data={testData}
        renderItem={({ item }) => ( // Destructure item for cleaner access
          <ShoppingList name={item.name} key={item.id} isCompleted={item.completed} />
        )}
      >
      </FlatList>
    </View>
  );

}

var styles = StyleSheet.create({
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