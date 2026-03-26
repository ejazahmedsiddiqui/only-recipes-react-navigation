import {createNativeStackNavigator, createNativeStackScreen} from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import {createStaticNavigation} from "@react-navigation/native";
import {createBottomTabNavigator, createBottomTabScreen} from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/Settings";

type RootStackType = typeof RootStack;

//typecheck hooks like useNavigation
declare module "@react-navigation/core" {
    interface RootNavigator extends RootStackType {
    }
}

const Tabs = createBottomTabNavigator({
    screens: {
        Home: createBottomTabScreen({
            screen: HomeScreen,
            options: {
                tabBarIcon: {
                    type: 'materialSymbol',
                    name: 'home'
                }
            }
        }),
        Settings: createBottomTabScreen({
            screen: SettingsScreen
        }),
    },
});
const RootStack = createNativeStackNavigator({
    screens: {
        Tabs: createNativeStackScreen({
            screen: Tabs,
            options: {
                title: 'Home',
                headerStyle: {
                    backgroundColor: 'orange',
                },
                headerTitleAlign: 'center',
            }
        }),
        Settings: createNativeStackScreen({
            screen: SettingsScreen,
            options: {
                title: 'Home',
                // headerShown: false,
                headerStyle: {
                    backgroundColor: 'magenta',
                },
                headerTitleAlign: 'center',
            }
        }),
    },
})

export const Navigation = createStaticNavigation(RootStack)