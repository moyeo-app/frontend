import Header from "@/components/Header";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChallengeDetail() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Header title="" background="#FE8C00" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerDesc}>
            <Text style={styles.challengeTitle}>자바 알고리즘 1일 1커밋</Text>
            <View style={styles.dDayRow}>
              <Text style={styles.dDayText}>D-12</Text>
            </View>
          </View>

          <View style={styles.detailCon}>
            <Text style={styles.sectionTitle}>Introduce</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              i챌린지 suere dui. In hac habitasse platea dictumst. Morbi vitae
              tincidunt leo. Etiam id libero at turpis mollis posuere
              consectetur.
            </Text>

            <Text style={styles.sectionTitle}>Rules</Text>
            <Text style={styles.rules}>
              Rules 1{"\n"}Rules 2{"\n"}Rules 3
            </Text>

            <Text style={styles.similarChallengeTitle}>Similar Challenge</Text>
            <View style={styles.challengeCardRow}>
              <View style={styles.challengeCard}></View>
              <View style={styles.challengeCard}></View>
              <View style={styles.challengeCard}></View>
              <View style={styles.challengeCard}></View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => router.push("/make-challenge")}
        >
          <Text style={styles.buttonText}>Join Challenge</Text>
        </TouchableOpacity>
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
    padding: 24,
  },
  detailCon: {
    padding: 24,
  },
  challengeTitle: {
    fontSize: 25,
    fontFamily: "Jua-Regular",
    textAlign: "center",
    marginBottom: 12,
  },
  dDayRow: {
    alignItems: "center",
    marginBottom: 16,
  },
  dDayText: {
    fontSize: 32,
    color: "#fff",
    backgroundColor: "#fe8c00",
    padding: 8,
    borderRadius: 8,
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
    flexWrap: "wrap",
    gap: 20,
  },
  challengeCard: {
    width: 160,
    height: 160,
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
