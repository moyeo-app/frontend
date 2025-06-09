import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerHome}>
        <View style={styles.overlapGroup}>
          <View style={styles.overlap}>
            <View style={styles.profileImg}>
              <Image
                style={styles.chatgptImage}
                source={require("../../assets/images/google.png")}
              />
            </View>
          </View>
          <Text style={styles.username}>예은</Text>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.todayDate}>{`Today, 8 Jul`}</Text>
        <Text style={styles.yourActivities}>오늘의 챌린지</Text>
      </View>

      <View style={styles.calendarRow}>
        <Text style={styles.calendarText}>5</Text>
        <Text style={styles.calendarText}>6</Text>
        <Text style={styles.calendarText}>7</Text>
        <View style={styles.activeDate}>
          <Text style={styles.activeDateText}>Today, 8 Jul</Text>
        </View>
        <Text style={styles.calendarText}>9</Text>
        <Text style={styles.calendarText}>10</Text>
        <Text style={styles.calendarText}>11</Text>
      </View>

      <View style={styles.scheduleBox}>
        <Text style={styles.scheduleText}>6:00 - 7:00 미라클 모닝</Text>
      </View>
      <Text style={styles.scheduleTextGray}>9:00 - 16:00 모각코</Text>
      <Text style={styles.scheduleTextGray}>20:00 - 21:00 : 알고리즘</Text>

      <Text style={styles.selectChallenge}>당신의 챌린지를 골라보세요 !</Text>
      {/* <Image source={weuiArrowOutlined} style={styles.arrowIcon} /> 화살표 */}
      <View style={styles.cardRow}>
        <View>
          <Text>Card1</Text>
        </View>
        <View>
          <Text>Card2</Text>
        </View>
        <View>
          <Text>Card3</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <View style={styles.btnBackground}>
          <Text style={styles.btnText}>맘에 드는 챌린지가 없나요 ?</Text>
          <TouchableOpacity style={styles.makeNowBtn}>
            <Text style={styles.makeNowText}>Make Now</Text>
            {/* <IconlyBoldArrow /> */}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headerHome: {
    width: "100%",
    height: 180,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  overlapGroup: {
    alignItems: "center",
  },
  overlap: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  chatgptImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  dot: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  username: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  dateContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  todayDate: {
    fontSize: 16,
    color: "#7e7e7e",
  },
  yourActivities: {
    fontSize: 24,
    fontFamily: "Jua-Regular",
  },
  scheduleBox: {
    backgroundColor: "#ff8c00cc",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
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
    fontFamily: "Jua-Regular",
    marginTop: 10,
  },
  arrowIcon: {
    width: 12,
    height: 24,
    resizeMode: "contain",
    marginTop: 4,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 20,
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
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Jua-Regular",
  },
  makeNowBtn: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    marginTop: 8,
    alignItems: "center",
  },
  makeNowText: {
    color: "#9e9bc7",
    fontSize: 12,
    fontWeight: "600",
    marginRight: 4,
  },
});

export default Home;
