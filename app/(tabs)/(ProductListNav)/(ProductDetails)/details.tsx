import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const ProductDetailsScreen = () => {
  // Biến chứa thông tin sản phẩm
  const product = {
    id: 'PRD000000',
    name: 'Trứng gà C23',
    description: 'Loại trứng có kích thước vừa',
    origin: 'Trang Trại Phương Hân',
    categories: 'Trứng gà, Xuất khẩu',
    unit_sold: 'Hộp 6 quả',
    price: '24 000 Đồng',
    sales: 100,
    imgs: [
      'https://via.placeholder.com/150', // URL ảnh 1
      'https://via.placeholder.com/150', // URL ảnh 2
    ],
  };

  const [buy_count, setQuantity] = useState<string>(''); // Số lượng mua

  const addToCart = () => {
   router.push('/(tabs)/(Cart)/cart')
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
          <MaterialIcons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết sản phẩm</Text>
      </View>

      {/* Product Images */}
      <View style={styles.imageContainer}>
        {product.imgs.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.productImage} />
        ))}
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>

        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Mã sản phẩm:</Text> {product.id}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Mô tả sản phẩm:</Text> {product.description}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Nguồn gốc sản phẩm:</Text> {product.origin}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Loại sản phẩm:</Text> {product.categories}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Đơn vị bán:</Text> {product.unit_sold}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Giá bán:</Text> {product.price}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Lượt bán:</Text> {product.sales}
        </Text>

        {/* Quantity Input */}
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Số lượng mua</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số lượng mua"
          keyboardType="numeric"
          value={buy_count}
          onChangeText={setQuantity}
        />

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>

        {/* Reviews Section */}
        <Text style={styles.reviewsTitle}>Đánh giá về sản phẩm</Text>
      </View>
    </ScrollView>
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
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  detailsContainer: {
    paddingHorizontal: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 12,
  },
  addToCartButton: {
    backgroundColor: '#5f8fd1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 24,
  },
});

export default ProductDetailsScreen;
