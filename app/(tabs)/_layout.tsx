import CustomTabBar from "@/components/CustomTabBar";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    "Paperlogy-Regular": require("@/assets/fonts/Paperlogy-4Regular.ttf"),
    "Paperlogy-Bold": require("@/assets/fonts/Paperlogy-7Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="challenge" />
        <Tabs.Screen name="study" />
        <Tabs.Screen name="home" />
        <Tabs.Screen name="search" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </SafeAreaProvider>
  );
}
