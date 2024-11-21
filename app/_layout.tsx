import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from "../theme";

export default function Layout() {
    return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Marketplace",
                tabBarIcon: ({color, size}) => {
                    return (
                        <Entypo name="home" size={size} color={color} />
                    );
                }
            }}>
        </Tabs.Screen>

        <Tabs.Screen
            name="pastriesScreen"
            options={{
                title: "My Pastries",
                tabBarIcon: ({color, size}) => {
                    return (
                        <Fontisto name="sitemap" size={size} color={color} />
                    );
                }
            }}>

        </Tabs.Screen>

        <Tabs.Screen
            name="stapleScreen"
            options={{
                title: "My Staple",
                tabBarIcon: ({color, size}) => {
                    return (
                        <FontAwesome name="list-ul" size={size} color={color} />
                    );
                }
            }}
        >
        </Tabs.Screen>

        <Tabs.Screen
            name="user"
            options={{
                title: "User",
                headerShown: false,
                tabBarIcon: ({color, size}) => {
                    return (
                        <FontAwesome name="user" size={size} color={color} />
                    );
                }
            }}
        >
        </Tabs.Screen>
    </Tabs>
    );
}
