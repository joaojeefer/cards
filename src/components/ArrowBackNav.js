import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { metrics } from "@styles";

const ArrowBackNav = ({ onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.arrowArea}>
      <AntDesign name="arrowleft" size={metrics.icon.regular} color={color} />
    </TouchableOpacity>
  );
};

export default ArrowBackNav;

const styles = StyleSheet.create({
  arrowArea: {
    position: "absolute",
    alignSelf: "flex-start",
    left: metrics.spacing.small,
    top: metrics.spacing.regular,
  },
});
