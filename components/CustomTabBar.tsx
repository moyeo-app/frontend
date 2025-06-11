import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // 중앙 탭 (녹음 버튼)
        if (route.name === "record") {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.centerButton}
            >
              <Ionicons name="play" size={28} color="white" />
            </TouchableOpacity>
          );
        }

        // 일반 탭
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={getIcon(route.name)}
              size={22}
              color={isFocused ? "#FF6A00" : "#ccc"}
            />
            {isFocused && <Text style={styles.tabLabel}>{label}</Text>}
            {isFocused && <View style={styles.dot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function getIcon(routeName: string) {
  switch (routeName) {
    case "challenge":
      return "trophy-outline";
    case "home":
      return "home-outline";
    case "profile":
      return "location-outline";
    case "health":
      return "heart-outline";
    default:
      return "ellipse-outline";
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 105,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 5,
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#FF6A00",
    borderRadius: 3,
    marginTop: 2,
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FF6A00",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#FF6A00",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
