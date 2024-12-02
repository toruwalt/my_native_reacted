import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../theme";
import { ShoppingList } from "../components/ShoppingList";
import { Link, router, useRouter } from "expo-router";
import { useState } from "react";
import * as uuid from 'uuid';

type ShoppingListType = {
  id: string,
  name: string,
  completed: boolean
};

const initialShoppingList: ShoppingListType[] = [
  {id: "1", name: "Coffee", completed: false},
  {id: "2", name: "Tea", completed: false},
  {id: "3", name: "Juice", completed: false},
  {id: "4", name: "Smothy", completed: true},
  {id: "5", name: "Soda", completed: true},
  {id: "6", name: "Water", completed: false}
];

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
    //<View style={styles.container}>
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.containerSty}
      stickyHeaderIndices={[0]}>
        {/* stickyHeaderIndices={[0]} makes the compoents stick to the top */}
      <TextInput
        placeholder="E.g Wine"
        value={value}
        style={styles.itemSearch}
        autoCorrect
        keyboardType="numeric"
        onChangeText={setValue}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        />
      <View>
          {shoppingList.map((item) => (
              <ShoppingList name={item.name} key={item.id} isCompleted={item.completed} />))}
      </View>
    </ScrollView>
    
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
  }
});