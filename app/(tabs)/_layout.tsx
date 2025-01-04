import { Stack } from 'expo-router';

export default function _Layout() {
  return (
    <Stack>
      <Stack.Screen name="(ProductListNav)" options={{headerShown:false}} />
      <Stack.Screen name="(Cart)" options={{headerShown:false}} />
    </Stack>
  );
}
