import { DrawerNavigationProp } from '@react-navigation/drawer';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootDrawerParamList } from '../(ProductListNav)';
import { MaterialIcons } from '@expo/vector-icons';

type Order = {
  id: string;
  status: string;
  product: string;
  quantity: number;
  totalPrice: string;
};

const OrderListScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tất cả');
  const orders: Order[] = [
    {
      id: '6er456ret6erty7',
      status: 'Đang vận chuyển',
      product: 'Trứng gà C23',
      quantity: 3,
      totalPrice: '72 000 Đồng',
    },
    {
      id: '2ab345ghj6erty8',
      status: 'Đang xử lý',
      product: 'Trứng gà C24',
      quantity: 5,
      totalPrice: '120 000 Đồng',
    },
    // Add more orders here
  ];

  const filteredOrders = orders.filter((order) =>
    order.id.includes(search) && (filter === 'Tất cả' || order.status === filter)
  );

  const renderOrder = ({ item }: { item: Order }) => (
    <View style={styles.orderCard}>
      <Text>Mã đơn hàng: {item.id}</Text>
      <Text>Tình trạng: {item.status}</Text>
      <Text>Sản phẩm: {item.product}</Text>
      <Text>Số lượng mua: {item.quantity}</Text>
      <Text>Thành tiền: {item.totalPrice}</Text>
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
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Bộ lọc</Text>
        <TextInput
          style={styles.filterInput}
          value={filter}
          onChangeText={setFilter}
          placeholder="Tất cả"
        />
      </View>
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
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
