import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="accountList" options={{headerShown:false}}/>
      <Stack.Screen name="details" options={{headerShown:false}}/>
    </Stack>
  );
}
