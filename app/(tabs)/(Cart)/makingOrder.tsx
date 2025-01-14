import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const OrderScreen = () => {
  // State variables for data
  const [product_name, setProductName] = useState("Trứng gà C23");
  const [unit_sold, setUnit] = useState("Hộp 6 quả");
  const [product_quantity, setQuantity] = useState(3);
  const [order_amount, setTotalPrice] = useState(72000);
  const [payment_method, setPaymentMethod] = useState("");
  const [received_address, setAddress] = useState("19/2, khu phố Đông B");

  // Dropdown data
  const paymentOptions = [
    { label: "Chọn hình thức thanh toán", value: "" },
    { label: "Tiền mặt", value: "cash" },
    { label: "Chuyển khoản", value: "bank_transfer" },
  ];

  // Handle order submission
  const createOrder = () => {
    const orderDetails = {
      productName: product_name,
      unit: unit_sold,
      quantity: product_quantity,
      totalPrice: order_amount,
      paymentMethod: payment_method,
      address: received_address,
    };

    console.log("Order Details:", orderDetails);
    alert(`Đặt hàng thành công!\n\nChi tiết:\n${JSON.stringify(orderDetails, null, 2)}`);
    router.back()
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đặt hàng</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.text}>Sản phẩm: {product_name}</Text>
        <Text style={styles.text}>Đơn vị bán: {unit_sold}</Text>
        <Text style={styles.text}>Số lượng: {product_quantity}</Text>
        <Text style={styles.text}>Thành tiền: {order_amount.toLocaleString()} Đồng</Text>
      </View>

      <Text style={styles.label}>Hình thức thanh toán</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={paymentOptions}
        labelField="label"
        valueField="value"
        value={payment_method}
        placeholder="Chọn hình thức thanh toán"
        onChange={(item) => setPaymentMethod(item.value)}
        containerStyle={styles.dropdownContainer}
        itemContainerStyle={styles.itemContainer}
      />

      <Text style={styles.label}>Địa chỉ nhận hàng</Text>
      <TextInput
        style={styles.input}
        value={received_address}
        onChangeText={setAddress} // Allow the user to update the address
      />

      <TouchableOpacity style={styles.button} onPress={createOrder}>
        <Text style={styles.buttonText}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 10,
  },
  dropdownContainer: {
    borderRadius: 10,
  },
  itemContainer: {
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OrderScreen;
