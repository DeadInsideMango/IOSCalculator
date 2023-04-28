import { StyleSheet, Dimensions } from "react-native";
import { Colors } from '../../Colors/Colors';

const buttonWidth = Dimensions.get('window').width / 4

export const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.vivdGamboge,
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    text: {
        color: "white",
        fontSize: 24,
      },
      textSecondary: {
        color: "#060606",
      },
      buttonDouble: {
        width: Dimensions.get('window').width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
      },
      buttonSecondary: {
        backgroundColor: Colors.lightGray,
      },
      buttonAccent: {
        backgroundColor: Colors.darkLiver,
      },
});