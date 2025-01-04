import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{headerShown:false}}>
        <Drawer.Screen
          name="(ProductListNav)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Danh sách sản phẩm',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="(Cart)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Giỏ hàng',
            title: 'overview',
          }}
        />
         <Drawer.Screen
          name="(Orders)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Danh sách đơn hàng',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="(Accounts)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Danh sách tài khoản',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
