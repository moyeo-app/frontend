import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleTagPress = (text: string) => {
    setSearchInput(text);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchCon}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} />
          </TouchableOpacity>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Search Challenge"
              placeholderTextColor="#878787"
              style={styles.input}
              value={searchInput}
              onChangeText={setSearchInput}
            />
            <Ionicons name="search-outline" size={18} color="black" />
          </View>
          <TouchableOpacity onPress={() => setSearchInput("")}>
            <Text style={styles.cancelText}>취소</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.recentSearchTitle}>최근 검색어</Text>

        <View style={styles.tagRow}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => handleTagPress("프론트엔드")}
          >
            <Text style={styles.tagText}>프론트엔드</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => handleTagPress("알고리즘")}
          >
            <Text style={styles.tagText}>알고리즘</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => handleTagPress("CS 스터디")}
          >
            <Text style={styles.tagText}>CS 스터디</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tagRow}>
          <TouchableOpacity
            style={styles.longTag}
            onPress={() => handleTagPress("자바스크립트 알고리즘")}
          >
            <Text style={styles.tagText}>자바스크립트 알고리즘</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.recommendTitle}>추천 검색어</Text>

        <View style={styles.keywordRow}>
          <Text style={styles.keywordList}>
            flutter{"\n"}QA{"\n"}데이터{"\n"}프론트엔드
          </Text>
          <Text style={styles.keywordList}>
            승무원 면접{"\n"}spring{"\n"}경력직 개발자{"\n"}과제 전형
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
  },
  searchCon: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    marginLeft: 8,
  },
  cancelText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginLeft: 10,
  },
  recentSearchTitle: {
    fontSize: 15,
    color: "#7e7e7e",
    fontFamily: "Jua-Regular",
    marginBottom: 12,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  longTag: {
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  tagText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  recommendTitle: {
    fontSize: 15,
    color: "#7e7e7e",
    fontFamily: "Jua-Regular",
    marginBottom: 12,
    marginTop: 20,
  },
  keywordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keywordList: {
    fontSize: 16,
    color: "#000",
    lineHeight: 29,
    fontFamily: "Jua-Regular",
  },
});
