import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../(ProductListNav)';

const CartScreen = () => {
  // Dữ liệu giỏ hàng
  const [cartItems, setCartItems] = useState([
    {
      product_id: 'PRD000000',
      product_name: 'Trứng gà C23',
      unit_sold: 'Hộp 6 quả',
      product_price: 24000,
      quantity: 3,
    },
    {
      product_id: 'PRD000000',
      product_name: 'Trứng gà C23',
      unit_sold: 'Hộp 6 quả',
      product_price: 24000,
      quantity: 3,
    },
  ]);

  // Tính tổng tiền
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product_price * item.quantity, 0);
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleOrder = () => {
   router.push('/(tabs)/(Cart)/makingOrder')
  };
const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
      </View>

      {/* Nội dung giỏ hàng */}
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.totalText}>Thành tiền: {calculateTotal().toLocaleString()} Đồng</Text>
        <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
          <Text style={styles.orderButtonText}>Đặt hàng</Text>
        </TouchableOpacity>

        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <View>
              <Text style={styles.cartItemText}>
                <Text style={styles.boldText}>Mã sản phẩm:</Text> {item.product_id}
              </Text>
              <Text style={styles.cartItemText}>
                <Text style={styles.boldText}>Tên sản phẩm:</Text> {item.product_name}
              </Text>
              <Text style={styles.cartItemText}>
                <Text style={styles.boldText}>Đơn vị bán:</Text> {item.unit_sold}
              </Text>
              <Text style={styles.cartItemText}>
                <Text style={styles.boldText}>Giá bán:</Text> {item.product_price.toLocaleString()} Đồng
              </Text>
              <Text style={styles.cartItemText}>
                <Text style={styles.boldText}>Số lượng:</Text> {item.quantity}
              </Text>
              <Text style={styles.cartItemText}>
                <Text style={styles.boldText}>Thành tiền:</Text> {(item.product_price * item.quantity).toLocaleString()} Đồng
              </Text>
            </View>

            <TouchableOpacity onPress={() => removeItem(index)}>
              <MaterialIcons name="delete" size={28} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#5f8fd1',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  orderButton: {
    backgroundColor: '#5f8fd1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  cartItemText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default CartScreen;
