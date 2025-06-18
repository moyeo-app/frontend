import { LinearGradient } from "expo-linear-gradient";
import { LinkProps, router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface FixedBtnProps {
  url: LinkProps["href"]; // 정확한 타입!
  label?: string; // 기본값 있으니까 optional
}

const FixedBtn = ({ url, label = "Add Challenge" }: FixedBtnProps) => {
  const goToNext = () => {
    router.push(url);
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#FE8C00", "#FE6338"]}
      style={styles.gradientButton}
    >
      <TouchableOpacity style={styles.fixedButton} onPress={goToNext}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FixedBtn;

const styles = StyleSheet.create({
  gradientButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 14,
    elevation: 5,
  },
  fixedButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
