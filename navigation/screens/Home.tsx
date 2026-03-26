import {ScrollView, Text, StyleSheet} from "react-native";
import {Button} from "@react-navigation/elements";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView
            contentInsetAdjustmentBehavior={'automatic'}
            contentContainerStyle={{
             padding: 16,
             gap: 12,
            }}
        >
            <Text style={styles.headerText}>
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