import { userService } from "@/service/userApiService";
import { PrimaryButton, PrimaryButtonText } from "@/styles/common";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function makeName() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");

  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(30);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleSelect = async () => {
    try {
      const nicknameValidResult = await userService.postValidNickname({
        nickname,
      });
      console.log("닉네임 유효성 응답:", nicknameValidResult);

      router.push({
        pathname: "/info-accounts",
        params: { nickname },
      });
    } catch (error) {
      console.error("닉네임 검사 실패:", error);
      Alert.alert("닉네임이 유효하지 않습니다. 다시 입력해주세요.");
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.innerContainer,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.title}>닉네임을 알려주세요.</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="닉네임"
            placeholderTextColor="#bababa"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>

        <PrimaryButton
          style={styles.startButton}
          onPress={handleSelect}
          disabled={nickname.length <= 1}
        >
          <PrimaryButtonText>Next</PrimaryButtonText>
        </PrimaryButton>
      </Animated.View>
    </View>
  );
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce3d2",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: 340,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "Paperlogy-Bold",
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: "#fe8c00",
    marginBottom: 60,
  },
  input: {
    fontSize: 18,
    fontFamily: "Inter-Medium",
    color: "#000",
    height: 50,
  },
  loginButton: {
    backgroundColor: "#cfe2ef",
    borderRadius: 30,
    paddingVertical: 15,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    fontFamily: "Noto Sans KR-Regular",
  },
  startButton: { marginBottom: 50, width: "100%" },
});
