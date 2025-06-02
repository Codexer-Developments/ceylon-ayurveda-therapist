import { Stack } from "expo-router";
import { View } from "react-native";
import BottomMenu from "../components/BottomMenu";

export default function ScreenLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FEF7ED" }}>
      {/* Screen Content */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="appointments" />
        <Stack.Screen name="calendar" />
        <Stack.Screen name="search" />
        <Stack.Screen name="profile" />
      </Stack>

      {/* Persistent Bottom Menu */}
      <BottomMenu />
    </View>
  );
}
