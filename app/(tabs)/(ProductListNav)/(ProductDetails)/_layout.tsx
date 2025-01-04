import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="details" options={{headerShown:false}}/>
      
    </Stack>
  );
}
