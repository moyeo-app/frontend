import { useCharacter } from "@/contexts/CharacterContext";
import { PrimaryButton } from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";

const CHARACTERS = ["cat", "bear", "rabbit", "pig"] as const;

type CharacterType = (typeof CHARACTERS)[number];

const CHARACTER_IMAGES: Record<CharacterType, ImageSourcePropType> = {
  cat: require("../../assets/images/cat.png"),
  bear: require("../../assets/images/bear.png"),
  rabbit: require("../../assets/images/rabbit.png"),
  pig: require("../../assets/images/pig.png"),
};

const SuccessScreen = () => {
  const router = useRouter();
  const { selectedCharacter } = useCharacter();

  const selectedAnimal = CHARACTERS[selectedCharacter];
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
          source={CHARACTER_IMAGES[selectedAnimal]}
          resizeMode="contain"
        />
        <Text style={styles.subDesc}>회원가입 완료!</Text>
        <Text style={styles.title}>모여모여님</Text>
        <Text style={styles.title}>환영해요!</Text>
      </View>
      <PrimaryButton style={styles.startButton} onPress={handleGoToHome}>
        <PrimaryButtonText>START</PrimaryButtonText>
      </PrimaryButton>
    </LinearGradient>
  );
};

export default SuccessScreen;

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
