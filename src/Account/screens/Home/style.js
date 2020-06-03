import { StyleSheet } from "react-native";
import { colors, metrics } from "@styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.primary.dark,
  },
  logoArea: {
    flex: 1,
    justifyContent: "center",
  },
  logoText: {
    fontSize: metrics.fontSize.large * 2,
    fontWeight: "bold",
    color: colors.secondary.dark,
    textAlign: "center",
  },
  buttonsArea: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: metrics.spacing.large,
  },
});

export default styles;
