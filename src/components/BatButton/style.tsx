import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";

export const styles =  StyleSheet.create({
    button:{
        backgroundColor: colors.blue[800],
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    text: {
        color: "white",
        fontSize: 18,
    }
})