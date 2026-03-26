import {createNativeStackNavigator, createNativeStackScreen} from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import {createStaticNavigation} from "@react-navigation/native";
import {createBottomTabNavigator, createBottomTabScreen} from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/Settings";
import {Platform} from "react-native";
import {isLiquidGlassSupported} from "@callstack/liquid-glass";

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
                tabBarIcon: Platform.select({
                    ios: { type: "sfSymbol", name: "house.fill" },
                    android: { type: "materialSymbol", name: "home" },
                    default: { type: "image", source: require("../icons/home.png") },
                }),
            }
        }),
        Settings: createBottomTabScreen({
            screen: SettingsScreen,
            options: {
                tabBarIcon: Platform.select({
                    ios: { type: "sfSymbol", name: "gear" },
                    android: { type: "materialSymbol", name: "settings" },
                    default: { type: "image", source: require("../icons/home.png") },
                }),
            }
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
                    backgroundColor: isLiquidGlassSupported ? 'transparent' : undefined,
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