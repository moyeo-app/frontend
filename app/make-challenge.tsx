import CustomDropdown from "@/components/CustomDropdown";
import FixedBtn from "@/components/FixedBtn";
import Header from "@/components/Header";
import challengeApiService from "@/service/challengeService";
import { router } from "expo-router";
import { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [peopleCnt, setPeopleCnt] = useState("");
  const [weekAttend, setWeekAttend] = useState("");
  const [authType, setAuthType] = useState("타이머 인증");
  const [timerValue, setTimerValue] = useState("");
  const [attendanceTimeRange, setAttendanceTimeRange] = useState("");
  const [fee, setFee] = useState("");
  const [description, setDescription] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSummaryModalVisible, setIsSummaryModalVisible] = useState(false);

  const handleSelectAuthType = (value: string) => {
    setAuthType(value);
    setIsExpanded(true);
  };

  const handleCreateChallenge = async () => {
    try {
      let option;

      if (authType === "타이머 인증") {
        const [hours, minutes] = timerValue.split(":").map(Number);
        const totalMinutes = hours * 60 + minutes;
        option = {
          time: totalMinutes,
        };
      } else {
        const [startTime, endTime] = attendanceTimeRange
          .split("~")
          .map((v) => v.trim());
        option = {
          start: startTime,
          end: endTime,
        };
      }

      const payload = {
        title,
        startDate,
        endDate,
        type:
          authType === "타이머 인증"
            ? "TIME"
            : authType === "출석 인증"
              ? "ATTENDANCE"
              : "CONTENT",
        maxParticipants: Number(peopleCnt),
        fee: Number(fee),
        description,
        option,
        rule: Number(weekAttend),
        paymentId: "724f3ce4-7d8d-4fbf-852b-64a3252b83c5",
      };
      await challengeApiService.MakeChallenge(payload);
      setIsSummaryModalVisible(true);
    } catch (error) {
      console.error("챌린지 생성 실패:", error);
    }
  };

  const handleModalClose = () => {
    setIsSummaryModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header background="transparent" title="챌린지 생성" />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>1. 제목을 입력하세요.</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="모각코"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>2-1. 시작일을 입력하세요</Text>
            <TextInput
              style={styles.input}
              value={startDate}
              onChangeText={setStartDate}
              placeholder="2025-05-15"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>2-2. 종료일을 입력하세요</Text>
            <TextInput
              style={styles.input}
              value={endDate}
              onChangeText={setEndDate}
              placeholder="2025-06-15"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>3. 인원을 입력하세요.</Text>
            <TextInput
              style={styles.input}
              value={peopleCnt}
              onChangeText={setPeopleCnt}
              placeholder="(ex) 10"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>4. 주에 참여 횟수를 입력하세요.</Text>
            <TextInput
              style={styles.input}
              value={weekAttend}
              onChangeText={setWeekAttend}
              placeholder="(ex) 3"
            />
          </View>

          <CustomDropdown
            label="5. 인증 방식을 선택하세요."
            options={["타이머 인증", "출석 인증", "내용 인증"]}
            value={authType}
            onSelect={handleSelectAuthType}
          />

          {isExpanded && (
            <Animated.View
              key={authType}
              entering={FadeInDown.duration(300)}
              layout={Layout.springify()}
            >
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  {authType === "타이머 인증"
                    ? "5-1. 타이머 시간을 입력하세요. (예: 13:00:00)"
                    : authType === "출석 인증"
                      ? "5-1. 출석 시간 범위를 입력하세요. (예: 09:00 ~ 18:00)"
                      : "5-1. 키워드 설정 가능 시간을 입력하세요. (예: 09:00 ~ 18:00)"}
                </Text>
                <TextInput
                  style={styles.input}
                  value={
                    authType === "타이머 인증"
                      ? timerValue
                      : attendanceTimeRange
                  }
                  onChangeText={
                    authType === "타이머 인증"
                      ? setTimerValue
                      : setAttendanceTimeRange
                  }
                  placeholder={
                    authType === "타이머 인증" ? "13:00:00" : "09:00 ~ 18:00"
                  }
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>6. 참가비를 입력하세요.</Text>
                <TextInput
                  style={styles.input}
                  value={fee}
                  onChangeText={setFee}
                  placeholder="(ex) 20000"
                />
              </View>

              <Text style={styles.label}>
                7. 챌린지 세부 설명을 입력하세요.
              </Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                value={description}
                onChangeText={setDescription}
                placeholder="설명 작성"
              />
            </Animated.View>
          )}
        </ScrollView>
        <FixedBtn label="Create Challenge" onPress={handleCreateChallenge} />
      </View>

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
              <Text style={styles.value}>
                {startDate}-{endDate}
              </Text>
            </View>
            <View style={styles.modalItem}>
              <Text style={styles.label}>인원 수:</Text>
              <Text style={styles.value}>{peopleCnt}</Text>
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
  modalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  value: {
    color: "#555",
  },
});
