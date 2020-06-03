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
  interactionArea: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: metrics.spacing.large,
  },
  inputsArea: { flex: 4, justifyContent: "center" },
  inputArea: {
    marginBottom: metrics.spacing.small,
    flexDirection: "row",
    alignItems: "center",
  },
  input: { width: "100%" },
  inputIcon: {
    position: "absolute",
    right: metrics.spacing.small,
  },
  formErrorArea: {
    height: metrics.spacing.large,
    justifyContent: "center",
  },
  formErrorText: {
    fontSize: metrics.fontSize.title,
    fontWeight: "bold",
    color: colors.error,
    textAlign: "center",
    textTransform: "uppercase",
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
