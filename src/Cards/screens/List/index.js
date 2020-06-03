import React from "react";
import { ActivityIndicator, Alert, View, Text, ScrollView } from "react-native";
import { Card } from "../../components";
import styles from "./style";
import cardsConnect from "@cards/connect";
import { colors, metrics } from "@styles";

function List({ navigation, cardsLoading, cards, getCards, cardDelete }) {
  React.useEffect(() => {
    getCards();
  }, []);

  function handleDelete(cardId) {
    Alert.alert("Delete Card", "Do you really want to delete this card?", [
      { text: "Cancel", onPress: () => false },
      { text: "Ok", onPress: () => cardDelete(cardId) },
    ]);
  }

  return cardsLoading ? (
    <View style={styles.loadingArea}>
      <ActivityIndicator
        size={metrics.icon.large}
        color={colors.secondary.dark}
      />
    </View>
  ) : cards && cards.length > 0 ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrolledContainer}
    >
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            content={card.content}
            editCard={() => navigation.navigate("CardUpdate", { id: card.id })}
            deleteCard={() => handleDelete(card.id)}
            key={card.id}
          />
        );
      })}
    </ScrollView>
  ) : (
    <View style={styles.emptyCardsArea}>
      <Text style={styles.emptyCardsText}>
        There are no cards for now. Sorry...
      </Text>
    </View>
  );
}

export default cardsConnect(List);
