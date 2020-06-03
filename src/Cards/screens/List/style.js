import { StyleSheet } from "react-native";
import { colors, metrics } from "@styles";

const styles = StyleSheet.create({
  loadingArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrolledContainer: {
    flex: 1,
    marginVertical: metrics.spacing.small,
    paddingHorizontal: metrics.spacing.regular,
  },
  emptyCardsArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCardsText: {
    fontSize: metrics.fontSize.large,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary.dark,
  },
});

export default styles;
