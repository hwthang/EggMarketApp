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
  id: string;
  status: string;
  createdDate: string;
  lastUpdated: string;
  staffName: string;
  staffId: string;
  customerName: string;
  customerId: string;
  address: string;
  paymentMethod: string;
  product: string;
  unit: string;
  price: string;
  quantity: number;
  totalPrice: string;
};

const OrderDetailsScreen: React.FC = () => {
  const [rejectionReason, setRejectionReason] = useState('');

  const order: OrderDetails = {
    id: '67heyrhq9wejrou',
    status: 'Đang vận chuyển',
    createdDate: '23/12/2024',
    lastUpdated: '23/12/2024',
    staffName: 'Nguyễn Văn Hoàn',
    staffId: '6weyrwe9r92374',
    customerName: 'Đặng Hữu Thắng',
    customerId: '8qweoi98123949',
    address: '19/2, khu phố Đông B',
    paymentMethod: 'Trực tiếp',
    product: 'Trứng gà C23',
    unit: 'Hộp 6 quả',
    price: '24 000 Đồng',
    quantity: 3,
    totalPrice: '72 000 Đồng',
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
        <Text>Mã đơn hàng: {order.id}</Text>
        <Text>Tình trạng: {order.status}</Text>
        <Text>Ngày tạo: {order.createdDate}</Text>
        <Text>Ngày cập nhật lần cuối: {order.lastUpdated}</Text>
        <Text>Nhân viên tiếp nhận: {order.staffName}</Text>
        <Text>Mã nhân viên: {order.staffId}</Text>
        <Text>Khách hàng: {order.customerName}</Text>
        <Text>Mã khách hàng: {order.customerId}</Text>
        <Text>Địa chỉ: {order.address}</Text>
        <Text>Hình thức thanh toán: {order.paymentMethod}</Text>
        <Text>Sản phẩm: {order.product}</Text>
        <Text>Đơn vị bán: {order.unit}</Text>
        <Text>Giá bán: {order.price}</Text>
        <Text>Số lượng: {order.quantity}</Text>
        <Text>Thành tiền: {order.totalPrice}</Text>

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
