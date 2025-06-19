import { PrimaryButton } from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

const success = () => {
  const router = useRouter();
  const handleMain = () => {
    router.replace({ pathname: "/(tabs)/home" });
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#FCE3D2", "#FFFFFF"]}
    >
      <Image source={require("../assets/images/test.png")} />
      <Text style={styles.subDesc}>회원가입 완료.</Text>
      <Text style={styles.title}>모여모여님 환영해요!</Text>
      <PrimaryButton onPress={handleMain}>
        <PrimaryButtonText>START</PrimaryButtonText>
      </PrimaryButton>
    </LinearGradient>
  );
};

export default success;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "Paperlogy-Bold",
  },
  subDesc: {
    fontSize: 16,
    fontFamily: "Paperlogy-Regular",
    color: "#979797",
  },
  selected: { opacity: 1 },
});

const PrimaryButtonText = styled.Text`
  font-family: "Paperlogy-bold";
`;
