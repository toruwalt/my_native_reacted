import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../theme";
import { ShoppingList } from "../components/ShoppingList";
import { Link, router, useRouter } from "expo-router";
import { useState } from "react";
import * as uuid from 'uuid';

export default function App() {
  //saves the state
  const [value, setValue] = useState("");
  const router = useRouter();

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

  const [shoppingList, setShoppingList] = useState<ShoppingListType[]>(initialShoppingList)

  const handleSubmit = () => {
      if (value) {
        const newShoppingList = [
          { id: new Date().toISOString(), name: value, completed: false},
          ...initialShoppingList,
        ];
        setShoppingList(newShoppingList);
        setValue("");
      }
    };



  return (
    <View style={styles.container}>
      <Link href={"/pastriesScreen"} style={styles.menuLinks}>
        <Text style={styles.menuHeader}>Go to Pastries</Text>
      </Link>
      {/* onChange */}
      <TextInput
        placeholder="E.g Wine"
        value={value}
        style={styles.itemSearch}
        autoCorrect
        keyboardType="numeric"
        onChangeText={(item) => setValue(item)}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        />
      <View>
          {shoppingList.map((item) => (
              <ShoppingList name={item.name} key={item.id} isCompleted={item.completed} />))}
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
    marginHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
    paddingHorizontal: 20,
  }
});