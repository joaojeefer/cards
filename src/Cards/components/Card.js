import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, metrics } from "@styles";

function Card({ title, content, editCard, deleteCard }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleContent} numberOfLines={3} ellipsizeMode="tail">
        {content}
      </Text>
      <View style={styles.iconsArea}>
        <TouchableOpacity onPress={editCard}>
          <MaterialIcons
            name="edit"
            size={metrics.icon.regular}
            color={colors.light}
          />
        </TouchableOpacity>
        <View style={styles.deleteIcon}>
          <TouchableOpacity onPress={deleteCard}>
            <MaterialIcons
              name="delete"
              size={metrics.icon.regular}
              color={colors.light}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    height: metrics.cardHeight,
    width: "100%",
    justifyContent: "space-between",
    padding: metrics.spacing.regular,
    marginBottom: metrics.spacing.small,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.secondary.regular,
  },
  titleText: {
    color: colors.light,
    fontSize: metrics.fontSize.large,
    fontWeight: "bold",
    textAlign: "justify",
    textTransform: "uppercase",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  titleContent: {
    color: colors.light,
    fontSize: metrics.fontSize.title,
    textAlign: "justify",
    flexWrap: "wrap",
  },
  iconsArea: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  deleteIcon: { marginLeft: metrics.spacing.regular },
});
