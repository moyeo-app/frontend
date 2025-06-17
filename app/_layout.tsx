import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text as DefaultText, TextProps } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    "Paperlogy-Regular": require("../assets/fonts/Paperlogy-4Regular.ttf"),
    "Paperlogy-Bold": require("../assets/fonts/Paperlogy-7Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export const Text = (props: TextProps) => {
  return (
    <DefaultText
      {...props}
      style={[{ fontFamily: "Paperlogy-Regular" }, props.style]}
    />
  );
};
