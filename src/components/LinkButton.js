import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, metrics } from "@styles";

const LinkButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.transparent,
    justifyContent: "center",
    alignItems: "center",
    height: metrics.buttonHeight,
  },
  text: {
    fontSize: metrics.fontSize.title,
    fontWeight: "bold",
    color: colors.secondary.dark,
    textTransform: "uppercase",
  },
});
