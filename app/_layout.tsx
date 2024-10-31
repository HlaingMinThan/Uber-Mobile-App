import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="find-ride"
          options={{ headerTitle: "Find Ride", headerShown: false }}
        />
        <Stack.Screen
          name="confirm-ride"
          options={{ headerTitle: "Confirm Ride", headerShown: false }}
        />
        <Stack.Screen
          name="book-ride"
          options={{ headerTitle: "Book Ride", headerShown: false }}
        />
        <Stack.Screen name="(auth)/sign-up" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/signin"
          options={{ headerTitle: "Sign in", headerShown: false }}
        />
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
    </AuthContextProvider>
  );
}
