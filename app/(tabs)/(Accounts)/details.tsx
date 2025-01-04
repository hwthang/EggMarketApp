import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const AccountDetails = () => {
  const navigation = useNavigation();

  // Sample account details
  const accountDetails = {
    userId: "235oih21364o2ij5",
    phone: "0933389823",
    fullName: "Nguyễn Hưng",
    gender: "Nam",
    role: "Nhân viên",
    address: "12/2, khu phố Đông A",
    createdDate: "12/12/2024",
    lastUpdatedDate: "12/12/2024",
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log("Delete employee:", accountDetails.userId);
    router.back()
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết tài khoản</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assets/images/react-logo.png')} // Replace with the actual path to your image
          style={styles.profileImage}
        />
      </View>

      {/* Account Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Mã người dùng:</Text> {accountDetails.userId}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Số điện thoại:</Text> {accountDetails.phone}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Họ tên:</Text> {accountDetails.fullName}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Giới tính:</Text> {accountDetails.gender}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Vai trò:</Text> {accountDetails.role}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Địa chỉ:</Text> {accountDetails.address}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Ngày tạo:</Text> {accountDetails.createdDate}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Ngày cập nhật lần cuối:</Text> {accountDetails.lastUpdatedDate}
        </Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Xóa nhân viên</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backButton: {
    fontSize: 24,
    color: "#4A90E2",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#CCC", // Placeholder background
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FF4D4F",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountDetails;
