import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <View style={styles.leftInfo}>
        <Ionicons name="chevron-back" size={20} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightIcons}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#BABABA"
          style={styles.iconSpacing}
        />
        <Ionicons name="people-outline" size={20} color="#BABABA" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  leftInfo: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    marginLeft: 5,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginRight: 12,
  },
});
