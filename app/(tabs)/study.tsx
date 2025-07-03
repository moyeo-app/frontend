import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function study() {
  return (
    <SafeAreaView>
      <Text>넴</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
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
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
    color: "#0f0f0f",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
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
