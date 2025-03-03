import { Stack } from "expo-router";
import { FC } from "react";

const RootLayout: FC = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "Splash" }} />
    </Stack>
  );
};

export default RootLayout;
