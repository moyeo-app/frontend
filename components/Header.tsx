import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({
  title,
  background = "white",
}: {
  title: string;
  background?: string;
}) {
  const router = useRouter();

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.header, { backgroundColor: background }]}
    >
      <View style={styles.headerContent}>
        <View style={styles.leftInfo}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => router.push("/search")}>
            <Ionicons
              name="search-outline"
              size={22}
              style={styles.iconSpacing}
            />
          </TouchableOpacity>
          <Ionicons name="people-outline" size={22} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  leftInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
