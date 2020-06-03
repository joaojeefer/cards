import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { colors, metrics } from "@styles";

const SubmitButton = ({ onPress, title, icon, disabled, loading }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.button}
    >
      {loading ? (
        <ActivityIndicator size={metrics.icon.small} color={colors.light} />
      ) : (
        <>
          <View style={styles.icon}>{icon ? icon : undefined}</View>
          <Text style={styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.secondary.dark,
    paddingVertical: metrics.spacing.regular,
    justifyContent: "center",
    alignItems: "center",
    height: metrics.buttonHeight,
    borderRadius: metrics.borderRadius,
  },
  icon: { position: "absolute", left: 20 },
  text: {
    fontSize: metrics.fontSize.large,
    fontWeight: "bold",
    color: colors.light,
    textTransform: "uppercase",
  },
});
