import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  label: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
}

export default function CustomDropdown({
  label,
  options,
  value,
  onSelect,
}: Props) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    onSelect(option);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <Text style={styles.value}>{value}</Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#000"
        />
      </TouchableOpacity>

      {open &&
        options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => handleSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    color: "#0f0f0f",
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  value: { fontSize: 16, color: "#000" },
  option: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
    backgroundColor: "#f9f9f9",
  },
  optionText: { fontSize: 16, color: "#000" },
});
