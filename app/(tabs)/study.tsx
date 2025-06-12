import React from "react";
import { StyleSheet, Text, View } from "react-native";

const study = () => {
  return (
    <View style={styles.container}>
      <Text>study</Text>
    </View>
  );
};

export default study;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDE6D9",
  },
});
