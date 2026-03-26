import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Navigation} from "./navigation/Navigation";
import {
    DefaultTheme, DarkTheme, MaterialLightTheme,
    MaterialDarkTheme,
} from "@react-navigation/native";

export default function App() {
    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';

    const currentTheme = Platform.select({
        ios: isDarkMode ? DarkTheme : DefaultTheme,
        android: isDarkMode ? MaterialDarkTheme : MaterialLightTheme,
    })
    return <Navigation theme={currentTheme}/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
