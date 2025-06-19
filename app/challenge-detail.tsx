import FixedBtn from "@/components/FixedBtn";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChallengeDetail() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Header title="" background="#FE8C00" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerDesc}>
            <Text style={styles.dDayDesc}>시작까지 남은 날</Text>
            <View style={styles.dDayRow}>
              <Text style={styles.dDayText}>D</Text>
              <Text style={styles.dDayText}>+</Text>
              <Text style={styles.dDayText}>3</Text>
            </View>
          </View>

          <View style={styles.detailCon}>
            <View style={styles.detailItem}>
              <Text style={styles.sectionTitle}>Title</Text>
              <Text style={styles.challengeTitle}>자바 알고리즘 1일 1커밋</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.sectionTitle}>Introduce</Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent i챌린지 suere dui. In hac habitasse platea dictumst.
                Morbi vitae tincidunt leo. Etiam id libero at turpis mollis
                posuere consectetur.
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.sectionTitle}>Rules</Text>
              <Text style={styles.rules}>
                Rules 1{"\n"}Rules 2{"\n"}Rules 3
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.similarChallengeTitle}>
                Similar Challenge
              </Text>
              <View style={styles.challengeCardRow}>
                <View style={styles.challengeCard}></View>
                <View style={styles.challengeCard}></View>
              </View>
            </View>
          </View>
        </ScrollView>
        <FixedBtn label="Join Challenge" url="/home" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    position: "relative",
  },
  scrollContent: {
    paddingBottom: 140,
  },
  headerDesc: {
    backgroundColor: "#FE8C00",
    padding: 30,
  },
  detailCon: {
    paddingHorizontal: 24,
  },
  detailItem: {
    borderBottomColor: "#D5D5D5",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  challengeTitle: {
    fontSize: 25,
    fontFamily: "Paperlogy-Bold",
    textAlign: "left",
    marginBottom: 12,
  },
  dDayRow: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  dDayText: {
    fontFamily: "Paperlogy-Bold",
    borderBottomColor: "white",
    fontSize: 40,
    color: "#fff",
    borderBottomWidth: 2,
    backgroundColor: "#fe8c00",
    padding: 8,
  },
  dDayDesc: {
    fontFamily: "Paperlogy-Regular",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4f4f4f",
  },
  rules: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4f4f4f",
    marginBottom: 16,
  },
  similarChallengeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  challengeCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  challengeCard: {
    width: 162,
    height: 234,
    borderRadius: 19,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipse: {
    position: "absolute",
    width: 92,
    height: 92,
    backgroundColor: "#ea150233",
    borderRadius: 46,
    top: 25,
    left: 35,
  },
  innerEllipse: {
    position: "absolute",
    width: 68,
    height: 68,
    backgroundColor: "#ea1502",
    borderRadius: 34,
    top: 37,
    left: 47,
  },
  cardImage: {
    width: 75,
    height: 72,
    resizeMode: "contain",
  },
  editIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  bottomButton: {
    position: "absolute",
    bottom: 20,
    left: 24,
    right: 24,
    backgroundColor: "#FF6A00",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
