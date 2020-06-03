import React from "react";
import { Image, StyleSheet } from "react-native";
import logo from "@assets/logo.png";

const LogoImage = () => {
  return <Image source={logo} style={styles.image} />;
};

export default LogoImage;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: "contain",
  },
});
