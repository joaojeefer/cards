import { StyleSheet } from "react-native";
import { colors, metrics } from "@styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.primary.dark,
  },
  iconArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: metrics.fontSize.large,
    color: colors.secondary.dark,
    textAlign: "center",
    paddingHorizontal: metrics.spacing.large,
  },
  interactionArea: {
    flex: 2,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: metrics.spacing.large,
  },
  inputsArea: { flex: 1, justifyContent: "center" },
  inputArea: {
    marginBottom: metrics.spacing.small,
    flexDirection: "row",
    alignItems: "center",
  },
  input: { width: "100%" },
  inputIcon: {
    position: "absolute",
    right: metrics.spacing.regular,
  },
  createCardErrorArea: {
    height: metrics.spacing.large,
    justifyContent: "center",
  },
  createCardErrorText: {
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
