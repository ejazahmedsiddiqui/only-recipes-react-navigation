import {ScrollView, Text, StyleSheet} from "react-native";
import {DefaultTheme, useNavigation, useTheme} from "@react-navigation/native";
import {Button} from "@react-navigation/elements";

export default function SettingsScreen() {
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
                Settings Screen
            </Text>
            {navigation.canGoBack() &&
                <Button onPressIn={() => navigation.goBack()}>Go Back</Button>
            }
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