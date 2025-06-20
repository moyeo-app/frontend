import React, { useMemo } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Home = () => {
  const today = new Date();

  const formattedDate = useMemo(() => {
    return `Today, ${today.getDate()} ${MONTH_NAMES[today.getMonth()]}`;
  }, [today]);

  const renderDate = (offset: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date.getDate();
  };

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("@/assets/images/header_home.png")}
          style={styles.headerHome}
        >
          <View style={styles.overlapGroup}>
            <View style={styles.overlap}>
              <View style={styles.profileImg}>
                <Image
                  style={styles.chatgptImage}
                  source={require("@/assets/images/cat.png")}
                />
              </View>
            </View>
            <Text style={styles.username}>예은</Text>
          </View>
        </ImageBackground>

        <View style={styles.conHome}>
          <View style={styles.dateContainer}>
            <Text style={styles.todayDate}>{formattedDate}</Text>
            <Text style={styles.yourActivities}>오늘의 챌린지</Text>
          </View>

          <View style={styles.calendarRow}>
            {[-3, -2, -1].map((offset) => (
              <Text key={offset} style={styles.calendarText}>
                {renderDate(offset)}
              </Text>
            ))}
            <View style={styles.activeDate}>
              <Text style={styles.activeDateText}>{formattedDate}</Text>
            </View>
            {[1, 2, 3].map((offset) => (
              <Text key={offset} style={styles.calendarText}>
                {renderDate(offset)}
              </Text>
            ))}
          </View>

          <View style={styles.scheduleBox}>
            <Text style={styles.scheduleText}>6:00 - 7:00 미라클 모닝</Text>
          </View>
          <Text style={styles.scheduleTextGray}>9:00 - 16:00 모각코</Text>
          <Text style={styles.scheduleTextGray}>20:00 - 21:00 : 알고리즘</Text>

          <Text style={styles.selectChallenge}>
            당신의 챌린지를 골라보세요 !
          </Text>

          <View style={styles.cardRow}>
            {[1, 2, 3].map((i) => (
              <View key={i} style={styles.cardItem}>
                <Text>모각코</Text>
                <Text>₩ 20000</Text>
              </View>
            ))}
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btnBackground}>
              <Text style={styles.btnText}>맘에 드는 챌린지가 없나요 ?</Text>
              <TouchableOpacity style={styles.makeNowBtn}>
                <Text style={styles.makeNowText}>Make Now</Text>
              </TouchableOpacity>
            </View>
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
  headerHome: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  conHome: {
    alignItems: "center",
  },
  overlapGroup: {
    alignItems: "center",
    marginTop: 20,
  },
  overlap: {
    width: 80,
    height: 80,
    borderRadius: 47.5,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 47.5,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  chatgptImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  username: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  dateContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  todayDate: {
    fontSize: 16,
    color: "#7e7e7e",
  },
  yourActivities: {
    fontSize: 24,
    fontFamily: "Paperlogy-Regular",
  },
  scheduleBox: {
    backgroundColor: "#ff8c00cc",
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
    color: "#7e7e7e",
    marginVertical: 2,
  },
  calendarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
    marginVertical: 20,
  },
  calendarText: {
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.4,
  },
  activeDate: {
    backgroundColor: "#fe8c00",
    padding: 6,
    borderRadius: 16,
  },
  activeDateText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  selectChallenge: {
    fontSize: 20,
    fontFamily: "Paperlogy-Bold",
    marginTop: 40,
    alignSelf: "flex-start",
    width: "80%",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 15,
  },
  cardItem: {
    backgroundColor: "#65CF58",
    height: 130,
    width: 110,
    borderRadius: 24,
    padding: 20,
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
});

export default Home;
