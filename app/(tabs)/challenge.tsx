import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function challenge() {
  const goToMakeChallenge = () => {
    router.push("/make-challenge");
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={22} />
          <Text style={styles.title}>챌린지</Text>
          <Ionicons name="search-outline" size={22} color="#BABABA" />
          <Ionicons name="people-outline" size={22} color="#BABABA" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search Challenge"
            placeholderTextColor="#878787"
            style={styles.input}
          />
          <Ionicons name="search-outline" size={18} color="black" />
        </View>
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={22} color="orange" />
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
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={22} color="#BABABA" />
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
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={22} color="#BABABA" />
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
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={22} color="#BABABA" />
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
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={22} color="#BABABA" />
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
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={22} color="#BABABA" />
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
      </ScrollView>
      <TouchableOpacity style={styles.fixedButton} onPress={goToMakeChallenge}>
        <Text style={styles.buttonText}>Add Challenge</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
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
  challengeSub: {
    textAlign: "center",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  calendarIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
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
  fixedButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#FF6A00",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
