import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

const SPLASH_TIMEOUT = 2500;
const LOGO_SIZE = 200;
const BACKGROUND_COLOR = "#FDE6D9";

SplashScreen.preventAutoHideAsync();

export default function SplashScreenScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Paperlogy-Regular": require("@/assets/fonts/Paperlogy-4Regular.ttf"),
    "Paperlogy-Bold": require("@/assets/fonts/Paperlogy-7Bold.ttf"),
  });

  useEffect(() => {
    const hideSplashAndNavigate = async () => {
      try {
        await SplashScreen.hideAsync();
        const timer = setTimeout(() => {
          router.replace("/login");
        }, SPLASH_TIMEOUT);

        return () => clearTimeout(timer);
      } catch (error) {
        console.warn("Failed to hide splash screen:", error);
      }
    };

    if (fontsLoaded) {
      hideSplashAndNavigate();
    }
  }, [fontsLoaded, router]);

  if (!fontsLoaded) {
    return null;
  }

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
    backgroundColor: BACKGROUND_COLOR,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
});
