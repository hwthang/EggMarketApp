import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="cart" options={{headerShown:false}}/>
      <Stack.Screen name="makingOrder" options={{headerShown:false}}/>
    </Stack>
  );
}
