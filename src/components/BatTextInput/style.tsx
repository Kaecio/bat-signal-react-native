import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  inputText: {
    width: "100%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: colors.blue[500],
    fontSize: 12,
    shadowColor: colors.blue[200],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    padding: 5,
  },
  text: {
    fontSize: 12,
    color: colors.black[100],
    fontWeight: "bold",
    marginTop: 5,
  },
});
