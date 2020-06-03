import React from "react";
import { Alert, Keyboard, View, Text } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SubmitButton, CommonInput } from "@components";
import { colors, metrics } from "@styles";
import styles from "./style";
import cardsConnect from "@cards/connect";

function Update({ navigation, route, cardsLoading, status, cardUpdate }) {
  const { id } = route.params;

  const [activeKeyboard, setActiveKeyboard] = React.useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [updateCardError, setUpdateCardError] = React.useState(false);

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
    if (status === "CARDS_UPDATE_SUCCESS") {
      Alert.alert("Card updated", "Card updated successfully!", [
        { text: "Ok", onPress: () => navigation.navigate("CardsList") },
      ]);
    }
  }, [status]);

  function validateCard() {
    if (title === "" || content === "") {
      setUpdateCardError(true);
    } else {
      setUpdateCardError(false);
      cardUpdate({ id, title, content });
    }
  }

  return (
    <View style={styles.container}>
      {activeKeyboard ? undefined : (
        <View style={styles.iconArea}>
          <MaterialIcons
            name="edit"
            size={metrics.icon.large}
            color={colors.secondary.dark}
          />
          <Text style={styles.iconText}>
            To update your card information, just fill in the information in the
            fields bellow.
          </Text>
        </View>
      )}
      <View style={styles.interactionArea}>
        <View style={styles.inputsArea}>
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                blurOnSubmit={false}
                value={title}
                onChangeText={setTitle}
                // maxLength={50}
                placeholder="Title"
                keyboardType="default"
                textContentType="none"
                returnKeyType="next"
              />
            </View>
            <View style={styles.inputIcon}>
              <MaterialIcons
                name="edit"
                size={metrics.icon.small}
                color={colors.secondary.dark}
              />
            </View>
          </View>
          <View style={styles.inputArea}>
            <View style={styles.input}>
              <CommonInput
                value={content}
                onChangeText={setContent}
                // maxLength={30}
                placeholder="Content"
                keyboardType="default"
                textContentType="none"
                returnKeyType="done"
              />
            </View>
            <View style={styles.inputIcon}>
              <MaterialIcons
                name="edit"
                size={metrics.icon.small}
                color={colors.secondary.dark}
              />
            </View>
          </View>
        </View>
        {updateCardError === true ? (
          <View style={styles.updateCardErrorArea}>
            <Text style={styles.updateCardErrorText}>
              Fill in the fields correctly!
            </Text>
          </View>
        ) : undefined}
        <View style={styles.buttonArea}>
          <SubmitButton
            loading={cardsLoading}
            diasbled={cardsLoading}
            onPress={validateCard}
            title="Update Card"
            icon={
              <MaterialCommunityIcons
                name="update"
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

export default cardsConnect(Update);
