import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors, metrics } from "@styles";

const CommonInput = ({
  maxLength,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
  placeholder,
  keyboardType,
  textContentType,
  returnKeyType,
  secureTextEntry,
  blurOnSubmit,
}) => {
  return (
    <TextInput
      style={styles.input}
      maxLength={maxLength}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      placeholderTextColor={colors.secondary.dark}
      underlineColorAndroid="transparent"
      autoCorrect={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      placeholder={placeholder}
      keyboardType={keyboardType}
      textContentType={textContentType}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      blurOnSubmit={blurOnSubmit}
    />
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingLeft: metrics.spacing.small,
    margin: metrics.spacing.small,
    backgroundColor: colors.transparent,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary.dark,
    fontSize: metrics.fontSize.title,
    color: colors.secondary.dark,
  },
});
