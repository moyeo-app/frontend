import CustomDropdown from "@/components/CustomDropdown";
import FixedBtn from "@/components/FixedBtn";
import Header from "@/components/Header";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown, Layout } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MakeChallenge() {
  const [period, setPeriod] = useState("2025 / 5 / 15 - 2025 / 6 / 15");
  const [peopleCount, setPeopleCount] = useState("10");
  const [authType, setAuthType] = useState("타이머 인증");
  const [timerValue, setTimerValue] = useState("13:00:00");
  const [attendanceTimeRange, setAttendanceTimeRange] =
    useState("09:00 ~ 18:00");
  const [fee, setFee] = useState("20000원");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSummaryModalVisible, setIsSummaryModalVisible] = useState(false);

  const handleSelectAuthType = (value: string) => {
    setAuthType(value);
    setIsExpanded(true);
  };

  const handleCreateChallenge = () => {
    setIsSummaryModalVisible(true);
  };

  const handleModalClose = () => {
    setIsSummaryModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header background="transparent" title="챌린지 생성" />
        <ScrollView contentContainerStyle={styles.container}>
          {/* 1 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>1. 제목을 입력하세요.</Text>
            <TextInput style={styles.input} value="모각코" />
          </View>

          {/* 2 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>2. 기간을 입력하세요</Text>
            <TextInput
              style={styles.input}
              value="2025 / 5 / 15 - 2025 / 6 / 15"
            />
          </View>

          {/* 3 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>3. 인원을 입력하세요.</Text>
            <TextInput style={styles.input} placeholder="(ex) 10" />
          </View>

          {/* 4 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>4. 주에 참여 횟수를 입력하세요.</Text>
            <TextInput style={styles.input} placeholder="(ex) 3일" />
          </View>

          {/* 5 */}
          <CustomDropdown
            label="5. 인증 방식을 선택하세요."
            options={["타이머 인증", "출석 인증"]}
            value={authType}
            onSelect={handleSelectAuthType}
          />

          {/* 5-1 */}
          {isExpanded && (
            <Animated.View
              key={authType}
              entering={FadeInDown.duration(300)}
              layout={Layout.springify()}
            >
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  {authType === "타이머 인증"
                    ? "5-1. 챌린지 출석 인증 타이머 시간을 정하세요."
                    : "5-1. 챌린지 출석 인증시간을 정하세요. (시간 범위)"}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={
                    authType === "타이머 인증"
                      ? "(ex) 13:00:00"
                      : "(ex) 09:00 ~ 18:00"
                  }
                />
              </View>

              {/* 6 */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>6. 참가비를 입력하세요.</Text>
                <TextInput style={styles.input} placeholder="(ex) 20000원" />
              </View>

              {/* 6 */}
              <Text style={styles.label}>
                7. 챌린지 세부 설명을 입력하세요.
              </Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                placeholder="설명 작성"
              />
            </Animated.View>
          )}
        </ScrollView>
        <FixedBtn
          label="Create Challenge"
          onPress={() => {
            handleCreateChallenge();
          }}
        />
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSummaryModalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.modalItem}>
              <Text style={styles.label}>기간:</Text>
              <Text style={styles.value}>{period}</Text>
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.label}>인원 수:</Text>
              <Text style={styles.value}>{peopleCount}</Text>
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.label}>인증 방식:</Text>
              <Text style={styles.value}>{authType}</Text>
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.label}>출석 인증시간:</Text>
              <Text style={styles.value}>
                {authType === "타이머 인증" ? timerValue : attendanceTimeRange}
              </Text>
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.label}>참가비:</Text>
              <Text style={styles.value}>{fee}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                router.push("/challenge-detail");
                handleModalClose();
              }}
            >
              <Text>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    backgroundColor: "white",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
    marginBottom: 70,
  },
  // Modal
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "85%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  modalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  value: {
    color: "#555",
  },
});
