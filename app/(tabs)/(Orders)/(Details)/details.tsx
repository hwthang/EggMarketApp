import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

type OrderDetails = {
  order_id: string;
  order_status: string;
  order_created: string;
  order_updated: string;
  employee_name: string;
  employee_id: string;
  customer_name: string;
  customer_id: string;
  received_address: string;
  payment_method: string;
  product_name: string;
  unit_sold: string;
  product_price: string;
  product_quantity: number;
  order_amount: string;
};

const OrderDetailsScreen: React.FC = () => {
  const [rejectionReason, setRejectionReason] = useState('');

  const order: OrderDetails = {
    order_id: '67heyrhq9wejrou',
    order_status: 'Đang vận chuyển',
    order_created: '23/12/2024',
    order_updated: '23/12/2024',
    employee_name: 'Nguyễn Văn Hoàn',
    employee_id: '6weyrwe9r92374',
    customer_name: 'Đặng Hữu Thắng',
    customer_id: '8qweoi98123949',
    received_address: '19/2, khu phố Đông B',
    payment_method: 'Trực tiếp',
    product_name: 'Trứng gà C23',
    unit_sold: 'Hộp 6 quả',
    product_price: '24 000 Đồng',
    product_quantity: 3,
    order_amount: '72 000 Đồng',
  };

  const handleAccept = () => {
    // Handle accept action here
    console.log('Order accepted');
  };

  const handleReject = () => {
    // Handle reject action here
    console.log('Order rejected with reason:', rejectionReason);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chi tiết đơn hàng</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text>Mã đơn hàng: {order.order_id}</Text>
        <Text>Tình trạng: {order.order_status}</Text>
        <Text>Ngày tạo: {order.order_created}</Text>
        <Text>Ngày cập nhật lần cuối: {order.order_updated}</Text>
        <Text>Nhân viên tiếp nhận: {order.employee_name}</Text>
        <Text>Mã nhân viên: {order.employee_id}</Text>
        <Text>Khách hàng: {order.customer_name}</Text>
        <Text>Mã khách hàng: {order.customer_id}</Text>
        <Text>Địa chỉ: {order.received_address}</Text>
        <Text>Hình thức thanh toán: {order.payment_method}</Text>
        <Text>Sản phẩm: {order.product_name}</Text>
        <Text>Đơn vị bán: {order.unit_sold}</Text>
        <Text>Giá bán: {order.product_price}</Text>
        <Text>Số lượng: {order.product_quantity}</Text>
        <Text>Thành tiền: {order.order_amount}</Text>

        <Text style={styles.rejectionLabel}>Lý do từ chối</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập lý do từ chối"
          value={rejectionReason}
          onChangeText={setRejectionReason}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
          <Text style={styles.buttonText}>Xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
          <Text style={styles.buttonText}>Từ chối</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#3a7bd5',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  rejectionLabel: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  acceptButton: {
    backgroundColor: '#3a7bd5',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  rejectButton: {
    backgroundColor: '#d9534f',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default OrderDetailsScreen;
