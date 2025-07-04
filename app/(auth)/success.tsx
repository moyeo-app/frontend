import { PrimaryButton } from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";

const CHARACTER_IMAGES = {
  CAT: require("../../assets/images/cat.png"),
  BEAR: require("../../assets/images/bear.png"),
  RABBIT: require("../../assets/images/rabbit.png"),
  PIG: require("../../assets/images/pig.png"),
};

export default function SuccessScreen() {
  const { nickname, selectedCharacter } = useLocalSearchParams();
  const nicknameStr = Array.isArray(nickname) ? nickname[0] : nickname;
  const selectedCharStr = Array.isArray(selectedCharacter)
    ? selectedCharacter[0]
    : selectedCharacter;

  const router = useRouter();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.05, {
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleGoToHome = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#FCE3D2", "#FFFFFF"]}
      style={styles.container}
    >
      <View style={styles.centerContent}>
        <Animated.Image
          style={[styles.characterImage, animatedStyle]}
          source={
            CHARACTER_IMAGES[selectedCharStr as keyof typeof CHARACTER_IMAGES]
          }
          resizeMode="contain"
        />
        <Text style={styles.subDesc}>회원가입 완료!</Text>
        <Text style={styles.title}>{nicknameStr}님</Text>
        <Text style={styles.title}>환영해요!</Text>
      </View>
      <PrimaryButton style={styles.startButton} onPress={handleGoToHome}>
        <PrimaryButtonText>START</PrimaryButtonText>
      </PrimaryButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Paperlogy-Bold",
  },
  subDesc: {
    fontSize: 16,
    fontFamily: "Paperlogy-Regular",
    color: "#979797",
    marginBottom: 15,
  },
  characterImage: {
    width: 220,
    height: 240,
  },
  startButton: {
    marginBottom: 50,
    width: "100%",
  },
});

const PrimaryButtonText = styled.Text`
  font-family: "Paperlogy-Bold";
`;
