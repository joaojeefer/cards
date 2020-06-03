import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ArrowBackNav, LogoImage } from "@components";
import { colors, metrics } from "@styles";

function Drawer(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ArrowBackNav onPress={navigation.closeDrawer} color={colors.light} />
      <View style={styles.logoArea}>
        <LogoImage />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.versionArea}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </View>
  );
}

export default Drawer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoArea: {
    height: metrics.icon.large * 2,
    width: "100%",
    marginVertical: metrics.spacing.small,
    justifyContent: "center",
    alignItems: "center",
  },
  versionArea: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: metrics.spacing.small,
  },
  versionText: {
    fontSize: metrics.fontSize.title,
    color: colors.light,
  },
});
