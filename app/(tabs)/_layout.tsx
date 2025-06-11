import CustomTabBar from "@/components/CustomTabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="map" />
      <Tabs.Screen name="record" />
      <Tabs.Screen name="health" />
      <Tabs.Screen name="medal" />
    </Tabs>
  );
}
