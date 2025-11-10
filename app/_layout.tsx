import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
       headerShown: false ,
       statusBarStyle:"dark",

      }}
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="lups"/>
      <Stack.Screen name="lupsDetalhes" />
      <Stack.Screen name="miut"/>


    </Stack>
  );
}
