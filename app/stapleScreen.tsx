import { StyleSheet, View, FlatList, TextInput, Text } from "react-native";
import { theme } from "../theme";
import { ShoppingList } from "../components/ShoppingList";
import { useState } from "react";

export type ShoppingListType = {
  id: string,
  name: string,
  completed: boolean
};

const initialShoppingList: ShoppingListType[] = [];

export default function App() {
  //saves the state
  const [shoppingList, setShoppingList] = useState(initialShoppingList)
  const [value, setValue] = useState<string>();

  const handleSubmit = () => {
      if (value) {
        const newShoppingList = [
          { id: new Date().toISOString(), name: value, completed: false},
          ...shoppingList,
        ];
        setShoppingList(newShoppingList);
        setValue(undefined);
      }
    };



  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => ( // Destructure item for cleaner access
          <ShoppingList name={item.name} key={item.id} isCompleted={item.completed} />
        )}
        ListHeaderComponent={
          <TextInput
          placeholder="E.g Wine"
          value={value}
          style={styles.itemSearch}
          autoCorrect
          keyboardType="numeric"
          onChangeText={setValue}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          ></TextInput>
        }
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <Text>Your shopping list is empty</Text>
          </View>
        }
        >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
  },

  containerSty: {
    paddingBottom: 24,
  },

  //darkMode colour scheme
  containerDM: {
    flex: 1,
    backgroundColor: theme.colorBlack,
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
  },

  itemSearch: {
    height: 50,
    borderColor: theme.colorBlack,
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 18,
    paddingHorizontal: 20,
    backgroundColor: theme.colorWhite,
  },

  listEmptyContainer: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  }
});