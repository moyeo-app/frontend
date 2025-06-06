import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function SplashScreenPage() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Paperlogy-Regular": require("../assets/fonts/Paperlogy-4Regular.ttf"),
    "Paperlogy-Bold": require("../assets/fonts/Paperlogy-7Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      const timer = setTimeout(() => {
        router.replace("/login");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDE6D9",
  },
  logo: { width: 200, height: 200 },
});
