import { DrawerNavigationProp } from '@react-navigation/drawer';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootDrawerParamList } from '../(ProductListNav)';
import { MaterialIcons } from '@expo/vector-icons';

type Order = {
  order_id: string;
  order_status: string;
  product_name: string;
  product_quantity: number;
  order_amount: string;
};

const OrderListScreen: React.FC = () => {
  const [search_value, setSearch] = useState('');
  const [filter_value, setFilter] = useState('Tất cả');
  const orders: Order[] = [
    {
      order_id: '6er456ret6erty7',
      order_status: 'Đang vận chuyển',
      product_name: 'Trứng gà C23',
      product_quantity: 3,
      order_amount: '72 000 Đồng',
    },
    {
      order_id: '2ab345ghj6erty8',
      order_status: 'Đang xử lý',
      product_name: 'Trứng gà C24',
      product_quantity: 5,
      order_amount: '120 000 Đồng',
    },
    // Add more orders here
  ];

  const filteredOrders = orders.filter((order) =>
    order.order_id.includes(search_value) && (filter_value === 'Tất cả' || order.order_status === filter_value)
  );

  const renderOrderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderCard}>
      <Text>Mã đơn hàng: {item.order_id}</Text>
      <Text>Tình trạng: {item.order_status}</Text>
      <Text>Sản phẩm: {item.product_name}</Text>
      <Text>Số lượng mua: {item.product_quantity}</Text>
      <Text>Thành tiền: {item.order_amount}</Text>
      <TouchableOpacity onPress={()=>router.push('/(tabs)/(Orders)/(Details)/details')}>
        <Text style={styles.detailButton}>Chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Danh sách đơn hàng</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Nhập mã đơn hàng"
        value={search_value}
        onChangeText={setSearch}
      />
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Bộ lọc</Text>
        <TextInput
          style={styles.filterInput}
          value={filter_value}
          onChangeText={setFilter}
          placeholder="Tất cả"
        />
      </View>
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.order_id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    
  },
  header: {
    flexDirection:'row',
    backgroundColor: '#3a7bd5',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#ffffff',
    marginLeft:12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  filterInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  orderCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  detailButton: {
    color: '#3a7bd5',
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default OrderListScreen;
