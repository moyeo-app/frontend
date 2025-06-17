import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function search() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <Ionicons name="chevron-back" size={18} color="black" />
          <TextInput
            placeholder="Search Challenge"
            placeholderTextColor="#878787"
            style={styles.input}
          />
          <Ionicons name="search-outline" size={18} color="black" />
        </View>

        <Text style={styles.cancelText}>취소</Text>
        <Text style={styles.recentSearchTitle}>최근 검색어</Text>

        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>프론트엔드</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>알고리즘</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>CS 스터디</Text>
          </View>
        </View>

        <View style={styles.tagRow}>
          <View style={styles.longTag}>
            <Text style={styles.tagText}>자바스크립트 알고리즘</Text>
          </View>
        </View>

        <Text style={styles.recommendTitle}>추천 검색어</Text>
        <Text style={styles.keywordList}>
          flutter{"\n"}QA{"\n"}데이터{"\n"}프론트엔드
        </Text>
        <Text style={styles.keywordListRight}>
          승무원 면접{"\n"}spring{"\n"}경력직 개발자{"\n"}과제 전형
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 393,
    height: 852,
    position: "relative",
    backgroundColor: "#fff",
  },
  inputContainer: {
    position: "absolute",
    top: 27,
    left: 36,
    width: 307,
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 60,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  rectangle: {
    position: "absolute",
    width: 331,
    height: 52,
    left: -31,
    top: 630,
  },
  cancelText: {
    position: "absolute",
    top: 40,
    left: 343,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  recentSearchTitle: {
    position: "absolute",
    top: 109,
    left: 10,
    fontSize: 15,
    color: "#7e7e7e",
    fontFamily: "Jua-Regular",
  },
  tagRow: {
    flexDirection: "row",
    position: "absolute",
    top: 147,
    left: 20,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  longTag: {
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 60,
  },
  tagText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  recommendTitle: {
    position: "absolute",
    top: 307,
    left: 10,
    fontSize: 15,
    color: "#7e7e7e",
    fontFamily: "Jua-Regular",
  },
  keywordList: {
    position: "absolute",
    top: 337,
    left: 25,
    fontSize: 16,
    color: "#000",
    lineHeight: 29,
    fontFamily: "Jua-Regular",
  },
  keywordListRight: {
    position: "absolute",
    top: 337,
    left: 204,
    fontSize: 16,
    color: "#000",
    lineHeight: 29,
    fontFamily: "Jua-Regular",
  },
});
