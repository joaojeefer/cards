import React from "react";
import { View, Text, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogoImage, SubmitButton, LinkButton, CommonInput } from "@components";
import accountConnect from "@account/connect";
import styles from "./style";
import { colors, metrics } from "@styles";

function Login({
  navigation,
  accountLoading,
  credentials,
  updateCredentials,
  credentialsError,
  updateRegister,
  signIn,
}) {
  const [activeKeyboard, setActiveKeyboard] = React.useState(false);

  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);

  const { email, password } = credentials;

  React.useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener("keyboardDidShow", () =>
      setActiveKeyboard(true)
    );
    keyboardHideListener.current = Keyboard.addListener("keyboardDidHide", () =>
      setActiveKeyboard(false)
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  });

  function validateCredentials() {
    if (email === "" || password === "") {
      updateRegister({ credentialsError: true });
    } else {
      signIn();
    }
  }

  return (
    <View style={styles.container}>
      {activeKeyboard ? undefined : (
        <View style={styles.logoArea}>
          <LogoImage />
          <Text style={styles.logoText}>CARDS</Text>
        </View>
      )}
      <View style={styles.interactionArea}>
        <View style={styles.inputsArea}>
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                blurOnSubmit={false}
                value={email}
                onChangeText={(email) =>
                  updateCredentials({
                    ...credentials,
                    email,
                  })
                }
                maxLength={50}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                returnKeyType="next"
              />
            </View>
            <View style={styles.inputIcon}>
              <MaterialCommunityIcons
                name="email"
                size={metrics.icon.small}
                color={colors.secondary.dark}
              />
            </View>
          </View>
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                value={password}
                onChangeText={(password) =>
                  updateCredentials({
                    ...credentials,
                    password,
                  })
                }
                maxLength={30}
                placeholder="Password"
                keyboardType="default"
                textContentType="password"
                returnKeyType="done"
                secureTextEntry
              />
            </View>
            <View style={styles.inputIcon}>
              <MaterialCommunityIcons
                name="email-lock"
                size={metrics.icon.small}
                color={colors.secondary.dark}
              />
            </View>
          </View>
        </View>
        {credentialsError === true ? (
          <View style={styles.credentialsErrorArea}>
            <Text style={styles.credentialsErrorText}>
              Invalid credentials!
            </Text>
          </View>
        ) : undefined}
        <View style={styles.buttonsArea}>
          <SubmitButton
            loading={accountLoading === true}
            disabled={accountLoading === true}
            onPress={validateCredentials}
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
    </View>
  );
}

export default accountConnect(Login);
