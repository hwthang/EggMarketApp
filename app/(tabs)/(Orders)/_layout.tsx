import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="orderList" options={{headerShown:false}}/>
      <Stack.Screen name="(Details)" options={{headerShown:false}}/>
    </Stack>
  );
}
