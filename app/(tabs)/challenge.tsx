import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function challenge() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={20} color="orange" />
          <Text style={styles.title}>챌린지</Text>
          <Ionicons name="search-outline" size={20} color="#BABABA" />
          <Ionicons name="people-outline" size={20} color="#BABABA" />
        </View>
        <View style={styles.challengeCard}>
          <Ionicons name="calendar" size={20} color="orange" />
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
          <Ionicons name="calendar" size={20} color="#BABABA" />
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
          <Ionicons name="calendar" size={20} color="#BABABA" />
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
          <Ionicons name="calendar" size={20} color="#BABABA" />
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
          <Ionicons name="calendar" size={20} color="#BABABA" />
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
          <Ionicons name="calendar" size={20} color="#BABABA" />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
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
    alignContent: "space-between",
  },
  calendarIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#24252C",
  },
  subText: {
    fontSize: 9,
    color: "#6E6A7C",
  },
  countText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#24252C",
  },
});
