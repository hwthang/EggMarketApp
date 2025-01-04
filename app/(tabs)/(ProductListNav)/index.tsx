import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { router } from 'expo-router';

type Product = {
  product_id: string;
  product_name: string;
  product_description: string;
  product_price: string;
  unit_sold: string;
  sales_count: number;
  product_imgs: string;
};

const ProductListScreen = () => {
  const [search_value, setSearchText] = useState('');
  const [filter_value, setFilter] = useState('Chọn loại sản phẩm')
  const [products, setProducts] = useState<Product[]>([
    {
      product_id: '1',
      product_name: 'Trứng gà ta C23',
      product_description: 'Trứng gà, Xuất khẩu,...',
      product_price: '24,000 Đồng',
      sales_count: 100,
      unit_sold: 'Hộp 6 quả',
      product_imgs: 'https://via.placeholder.com/150',
    },
    {
      product_id: '2',
      product_name: 'Trứng vịt ta',
      product_description: 'Trứng vịt, Nội địa',
      product_price: '22,000 Đồng',
      sales_count: 50,
      unit_sold: 'Hộp 6 quả',
      product_imgs: 'https://via.placeholder.com/150',
    },
  ]);

  const categories = [{ label: 'Trứng gà', value:  'Trứng gà'},
  { label: 'Xuất khẩu', value: 'Xuất khẩu' },
 
  ]

  const filteredProducts = products
  // .filter(
  //   (product) =>
  //     product.name.toLowerCase().includes(searchText.toLowerCase()) &&
  //     product.name.toLowerCase().includes(filter_value.toLowerCase())

  // );

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.product_imgs }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.product_name}</Text>
        <Text style={styles.productDescription}>{item.product_description}</Text>
        <Text style={styles.productPrice}>{item.product_price}/{item.unit_sold}</Text>
        <Text style={styles.productSales}>Lượt bán: {item.sales_count}</Text>
        <TouchableOpacity onPress={()=> router.push('/(tabs)/(ProductListNav)/(ProductDetails)/details')}>
          <Text style={styles.productDetailsButton}>Chi tiết</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItem = (item: {
    label: string;
    value: string;
  }) => {
    return (
      <View style={{
        marginLeft: 10,
        marginVertical: 10,
      }}>
        <Text style={{ fontSize: 15 }}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={28} color="white" />
        <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
      </View>

      {/* Search and Category Filter */}
      <View style={styles.filterContainer}>
        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập tên hoặc mã sản phẩm"
          value={search_value}
          onChangeText={setSearchText}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
          {/* Category Input */}
          <Dropdown
            style={[styles.searchInput, { flex: 1 }]}
            data={categories}
            labelField="label"
            valueField="value"
            value={filter_value}
            placeholder={filter_value}
            onChange={item => setFilter(item.label)}
            renderItem={renderItem}
            containerStyle={{ borderRadius: 10 }}
            itemContainerStyle={{ borderRadius: 10 }}
          />

          {/* Add Button */}
          <TouchableOpacity style={styles.addButton}>
            <MaterialIcons name="add" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>


     
        {/* Product List */}
        <FlatList
       
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.product_id}
          contentContainerStyle={styles.productList}
        />


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
  filterContainer: {
marginTop:12,
    flexDirection: 'column',

    paddingHorizontal: 16,
  
  },
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  categoryInput: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#5f8fd1',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    padding: 16,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#5f8fd1',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  productDescription: {
    fontSize: 14,
    color: '#e6e6e6',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'white',
    marginVertical: 4,
  },
  productSales: {
    fontSize: 12,
    color: 'white',
  },
  productDetailsButton: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  },
});

export default ProductListScreen;
