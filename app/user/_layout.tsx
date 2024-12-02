import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from "../../theme";

export default function Layouts() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                title: "Profile",
                headerRight: () => {
                    return (
                    // If you pass a navigation within a navigation, you must
                    // mark it asChild
                    <Link href="/user/history" asChild>
                        <Pressable hitSlop={20}>
                        <MaterialIcons
                            name="history"
                            size={32}
                            color={theme.colorGrey}
                        />
                        </Pressable>
                    </Link>
                    );
                },
                headerLeft: () => {
                    return (
                        <Link href="/user/history" asChild>
                        <Pressable hitSlop={20}>
                        <AntDesign
                            name="shoppingcart"
                            size={32}
                            color={theme.colorGrey} />
                        </Pressable>
                    </Link>
                    )
                }
                }}
            />

            <Stack.Screen name="history" options={{
            title: "History"
            }}>
            </Stack.Screen>
        </Stack>
    )
}

const styles = {
    navLinks: {

    }
}