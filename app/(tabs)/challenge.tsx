import FixedBtn from "@/components/FixedBtn";
import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Challenge() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCE3D2" }}>
      <Header background="#FCE3D2" title="" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text style={styles.titleText}>
          <Text style={styles.highlight}>모여모여님</Text>
          {"\n"}
          어떤 도전을 해볼까요?
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="search-outline" size={20} />
          <TextInput
            placeholder="Search Challenge"
            placeholderTextColor="#878787"
            style={styles.input}
          />
        </View>

        {Array.from({ length: 6 }).map((_, idx) => (
          <View key={idx} style={styles.challengeCard}>
            <Ionicons
              name="calendar"
              size={22}
              color={idx === 0 ? "orange" : "#BABABA"}
            />
            <View style={styles.challengeContent}>
              <View>
                <Text style={styles.subText}>5.15 ~ 8.15</Text>
                <Text style={styles.titleCardText}>알고리즘 같이해요 !</Text>
              </View>
              <View>
                <Text style={styles.subText}>9:00 - 16:00</Text>
                <Text style={styles.countText}>10/10</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <FixedBtn url="/make-challenge" label="Add Challenge" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    lineHeight: 32,
  },
  highlight: {
    color: "#FE8C00",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  challengeCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  challengeContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  titleCardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#24252C",
  },
  subText: {
    fontSize: 12,
    color: "#6E6A7C",
    marginBottom: 3,
  },
  countText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#24252C",
    textAlign: "center",
  },
});
