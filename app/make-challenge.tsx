import FixedBtn from "@/components/FixedBtn";
import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
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

export default function MakeChallenge() {
  const [rules, setRules] = useState<string[]>([]);
  const [newRule, setNewRule] = useState("");
  const [title, setTitle] = useState("");
  const handleAddRule = () => {
    if (newRule.trim() !== "") {
      setRules((prev) => [...prev, newRule.trim()]);
      setNewRule(""); // 입력창 초기화
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header title="챌린지 생성" />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>1. 제목을 입력하세요.</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>2. 기간을 입력하세요</Text>
            <TextInput
              style={styles.input}
              value="2025 / 5 / 15 - 2025 / 6 / 15"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>3. 인증 방식을 선택하세요.</Text>
            <TextInput style={styles.input} value="타이머 인증" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              3-1. 챌린지 출석 인증 타이머 시간을 정하세요.
            </Text>
            <TextInput style={styles.input} value="13:00:00" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>4. 인원을 입력하세요.</Text>
            <TextInput style={styles.input} value="10" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>5. 참가비를 입력하세요.</Text>
            <TextInput style={styles.input} value="20000원" />
          </View>

          <Text style={styles.label}>6. 챌린지 세부 설명을 입력하세요.</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            value="설명 어쩌구"
          />

          <Text style={styles.label}>7. 챌린지 규칙을 정하세요.</Text>
          <View style={styles.feedbackBox}>
            <View style={styles.dot} />
            <TextInput
              style={styles.feedbackTextInput}
              placeholder="새로운 규칙 입력"
              value={newRule}
              onChangeText={setNewRule}
            />
            <TouchableOpacity onPress={handleAddRule}>
              <Ionicons name="add-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {rules.map((rule, index) => (
            <View key={index} style={styles.noticeBox}>
              <View style={styles.dot} />
              <Text style={styles.feedbackText}>{rule}</Text>
            </View>
          ))}
        </ScrollView>
        <FixedBtn url="/challenge-detail" label="Create Challenge" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 95,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    color: "#0f0f0f",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  feedbackBox: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff7f2",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  feedbackTextInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    color: "#000",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fe8c00",
    marginRight: 10,
  },
  feedbackText: {
    fontSize: 14,
    color: "#000",
    flex: 1,
  },
  addIcon: {
    width: 20,
    height: 20,
  },
  noticeBox: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#FE7744",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
