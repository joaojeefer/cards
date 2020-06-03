import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { LogoImage } from "@components";
import styles from "./style";
import { colors, metrics } from "@styles";

function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <LogoImage />
        <Text style={styles.logoText}>CARDS</Text>
      </View>
      <View style={styles.loadingArea}>
        <ActivityIndicator
          size={metrics.icon.large}
          color={colors.secondary.dark}
        />
      </View>
    </View>
  );
}

export default Loading;
