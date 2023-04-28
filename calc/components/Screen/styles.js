import { StyleSheet } from "react-native";
import { SETTINGS } from "../../settings/settings";

export const styles = StyleSheet.create({
    container: {
        flex: .5,
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
    },
    textWidth: {
        width: SETTINGS.width,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    text: {
        fontSize: 75,
        fontWeight: '400',
        color: 'white'
    }
});