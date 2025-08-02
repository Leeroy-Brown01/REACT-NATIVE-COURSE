import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // This is the root layout for the app.
<Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

</Stack>
  );
}
