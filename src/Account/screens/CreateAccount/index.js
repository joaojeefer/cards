import React from "react";
import { Alert, View, Text, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ArrowBackNav,
  LogoImage,
  SubmitButton,
  CommonInput,
} from "@components";
import accountConnect from "@account/connect";
import styles from "./style";
import { colors, metrics } from "@styles";

function CreateAccount({
  navigation,
  accountLoading,
  formNewAccountError,
  updateRegister,
  createAccount,
  status,
}) {
  const [activeKeyboard, setActiveKeyboard] = React.useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

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

  React.useEffect(() => {
    if (status === "ACCOUNT_CREATED_SUCCESS") {
      Alert.alert("Account created", "New account created successfully!", [
        { text: "Ok", onPress: () => navigation.navigate("Login") },
      ]);
    }
  }, [status]);

  function validateForm() {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      updateRegister({ formNewAccountError: true });
    } else {
      createAccount({ name, email, password });
    }
  }

  return (
    <View style={styles.container}>
      <ArrowBackNav onPress={navigation.goBack} color={colors.secondary.dark} />
      {activeKeyboard ? undefined : (
        <View style={styles.logoArea}>
          <LogoImage />
          <Text style={styles.logoText}>CARDS</Text>
        </View>
      )}
      <View
        style={[
          styles.interactionArea,
          { marginTop: activeKeyboard ? metrics.spacing.large : 0 },
        ]}
      >
        <View style={styles.inputsArea}>
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                blurOnSubmit={false}
                value={name}
                onChangeText={setName}
                maxLength={50}
                placeholder="Name"
                keyboardType="default"
                textContentType="name"
                returnKeyType="next"
              />
            </View>
            <View style={styles.inputIcon}>
              <MaterialCommunityIcons
                name="account"
                size={metrics.icon.small}
                color={colors.secondary.dark}
              />
            </View>
          </View>
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                blurOnSubmit={false}
                value={email}
                onChangeText={setEmail}
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
                onChangeText={setPassword}
                maxLength={30}
                placeholder="Password"
                keyboardType="default"
                textContentType="password"
                returnKeyType="next"
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
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                maxLength={30}
                placeholder="Confirm password"
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
        {formNewAccountError === true ? (
          <View style={styles.formErrorArea}>
            <Text style={styles.formErrorText}>Review the fields entered!</Text>
          </View>
        ) : undefined}
        <View style={styles.buttonArea}>
          <SubmitButton
            loading={accountLoading === true}
            disabled={accountLoading === true}
            onPress={validateForm}
            title="Add user"
            icon={
              <MaterialCommunityIcons
                name="account-plus"
                size={metrics.icon.small}
                color={colors.light}
              />
            }
          />
        </View>
      </View>
    </View>
  );
}

export default accountConnect(CreateAccount);
