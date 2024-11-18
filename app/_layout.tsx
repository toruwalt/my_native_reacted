import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
    return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Marketplace",
                tabBarIcon: () => {
                    return (
                        <Entypo name="home" size={24} color="black" />
                    );
                }
            }}>
        </Tabs.Screen>

        <Tabs.Screen
            name="pastriesScreen"
            options={{
                title: "My Pastries",
                tabBarIcon: () => {
                    return (
                        <Fontisto name="sitemap" size={24} color="black" />
                    );
                }
            }}>

        </Tabs.Screen>

        <Tabs.Screen
            name="stapleScreen"
            options={{
                title: "My Staple",
                tabBarIcon: () => {
                    return (
                        <FontAwesome name="list-ul" size={24} color="black" />
                    );
                }
            }}
        >
        </Tabs.Screen>
    </Tabs>
    );
}