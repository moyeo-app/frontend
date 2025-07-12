import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const today = new Date();
  const formattedDate = useMemo(() => {
    return `Today, ${today.getDate()} Jul`;
  }, [today]);

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView style={styles.container}>
        <View style={styles.topHeader}>
          <Text style={styles.headerTitle}>오늘도 힘차게 시작해요! 💪</Text>
          <View>
            <Image
              style={styles.characterImage}
              source={require("@/assets/images/cat.png")}
            />
            <View>
              <Text style={styles.dateText}>{formattedDate}</Text>
              <Text style={styles.challengeTitle}>오늘의 챌린지</Text>

              <View style={styles.scheduleBox}>
                <Text style={styles.scheduleText}>6:00 - 7:00 미라클 모닝</Text>
              </View>
              <Text style={styles.scheduleTextGray}>9:00 - 16:00 모각코</Text>
              <Text style={styles.scheduleTextGray}>
                20:00 - 21:00 : 알고리즘
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.selectChallenge}>당신의 챌린지를 골라보세요 !</Text>

        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <Ionicons name="calendar" size={30} color="#FFB800" />
          </View>

          <Text style={styles.title}>알고리즘 같이해요 !</Text>
          <Text style={styles.period}>5.15 ~ 8.15</Text>
          <Text style={styles.time}>9:00 - 16:00</Text>

          <Text style={styles.peopleCnt}>10/10</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <Ionicons name="calendar" size={30} color="#FFB800" />
          </View>

          <Text style={styles.title}>알고리즘 같이해요 !</Text>
          <Text style={styles.period}>5.15 ~ 8.15</Text>
          <Text style={styles.time}>9:00 - 16:00</Text>

          <Text style={styles.peopleCnt}>10/10</Text>
        </View>
        <View>
          <View style={styles.card}>
            <View style={styles.iconWrapper}>
              <Ionicons name="calendar" size={30} color="#FFB800" />
            </View>

            <Text style={styles.title}>알고리즘 같이해요 !</Text>
            <Text style={styles.period}>5.15 ~ 8.15</Text>
            <Text style={styles.time}>9:00 - 16:00</Text>

            <Text style={styles.peopleCnt}>10/10</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.iconWrapper}>
              <Ionicons name="calendar" size={30} color="#FFB800" />
            </View>

            <Text style={styles.title}>알고리즘 같이해요 !</Text>
            <Text style={styles.period}>5.15 ~ 8.15</Text>
            <Text style={styles.time}>9:00 - 16:00</Text>

            <Text style={styles.peopleCnt}>10/10</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btnBackground}>
            <Text style={styles.btnText}>맘에 드는 챌린지가 없나요 ?</Text>
            <TouchableOpacity style={styles.makeNowBtn}>
              <Text style={styles.makeNowText}>Make Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  topHeader: {
    backgroundColor: "#7c90f8",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  characterImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
  challengeTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
  },
  scheduleBox: {
    backgroundColor: "#fe8c00",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  scheduleText: {
    color: "#fff",
    fontSize: 16,
  },
  scheduleTextGray: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 2,
  },
  btnContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "90%",
  },
  btnBackground: {
    backgroundColor: "#a3a0c9",
    borderRadius: 24,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
  makeNowBtn: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    alignItems: "center",
    marginLeft: 12,
  },
  makeNowText: {
    color: "#9e9bc7",
    fontSize: 12,
    fontWeight: "600",
  },
  selectChallenge: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    alignSelf: "flex-start",
    width: "80%",
    marginLeft: "10%",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: "center",
    padding: 16,
    margin: 10,
    width: 150,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  iconWrapper: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  period: {
    fontSize: 12,
    color: "#8E8E93",
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: "#8E8E93",
    marginBottom: 6,
  },
  peopleCnt: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },
});

export default Home;
