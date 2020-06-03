import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors, metrics } from "@styles";

function HeaderActionButton({ onPress, iconLabel }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        name={iconLabel}
        size={metrics.icon.small}
        color={colors.light}
      />
    </TouchableOpacity>
  );
}

export default HeaderActionButton;
