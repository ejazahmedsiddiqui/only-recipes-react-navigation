import {ScrollView, Text, StyleSheet} from "react-native";
import {Button} from "@react-navigation/elements";
import {useNavigation, useTheme} from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
        <ScrollView
            contentInsetAdjustmentBehavior={'automatic'}
            contentContainerStyle={{
             padding: 16,
             gap: 12,
            }}
        >
            <Text style={[styles.headerText, {
                color: colors.text
            }]}>
                Home Screen
            </Text>
            <Button
                onPressIn={() => navigation.navigate('Settings')}
                variant={'filled'}
            >
                Go to Settings</Button>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 40,
    }
})