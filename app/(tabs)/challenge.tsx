import FixedBtn from "@/components/FixedBtn";
import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function challenge() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="챌린지" />

      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Search Challenge"
              placeholderTextColor="#878787"
              style={styles.input}
              onFocus={() => router.push("/search")} // 여기에 route 이동
            />
            <Ionicons name="search-outline" size={18} color="black" />
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
                  <Text style={styles.titleText}>알고리즘 같이해요 !</Text>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
    padding: 20,
    paddingTop: 0,
    backgroundColor: "#fff",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  gradientButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 14,
    elevation: 5,
  },
  fixedButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  inputContainer: {
    height: 55,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 60,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  challengeCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#E9E9E9",
    borderWidth: 1,
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
  titleText: {
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
