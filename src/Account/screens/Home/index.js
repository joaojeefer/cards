import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogoImage, SubmitButton, LinkButton } from "@components";
import styles from "./style";
import { colors, metrics } from "@styles";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <LogoImage />
        <Text style={styles.logoText}>CARDS</Text>
      </View>
      <View style={styles.buttonsArea}>
        <SubmitButton
          onPress={() => navigation.navigate("Login")}
          title="login"
          icon={
            <MaterialCommunityIcons
              name="login"
              size={metrics.icon.small}
              color={colors.light}
            />
          }
        />
        <LinkButton
          onPress={() => navigation.navigate("CreateAccount")}
          title="Criar conta"
        />
      </View>
    </View>
  );
}

export default Home;
