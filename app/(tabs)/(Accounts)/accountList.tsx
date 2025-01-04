import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../(ProductListNav)";
import { router } from "expo-router";

const AccountList = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const [filter_value, setFilter] = useState("Tất cả");
  const [search_value, setSearchQuery] = useState("");
  const [accounts, setAccounts] = useState([
    {
      index: "1",
      user_id: "235oih21364o2ij5",
      fullName: "Đặng Hữu Thắng",
      gender: "Nam",
      phone: "0933386018",
      role: "Khách hàng",
    },
    {
      index: "2",
      user_id: "235oih21364o2ij5",
      fullName: "Đặng Hữu Thắng",
      gender: "Nam",
      phone: "0933386018",
      role: "Khách hàng",
    },
  ]);

  const filters = [
    { label: "Tất cả", value: "all" },
    { label: "Khách hàng", value: "customer" },
    { label: "Quản trị viên", value: "admin" },
  ];

  const handleDetailPress = (accountId:any) => {
    // Handle navigating to details or showing details
    router.push('/(tabs)/(Accounts)/details')
    console.log("Details for Account ID:", accountId);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Danh sách tài khoản</Text>
      </View>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Nhập tên hoặc mã người dùng"
        value={search_value}
        onChangeText={setSearchQuery}
      />

      {/* Filter */}
      <View style={styles.filterContainer}>
        <Dropdown
          style={styles.dropdown}
          data={filters}
          labelField="label"
          valueField="value"
          value={filter_value}
          placeholder={filter_value}
          onChange={(item) => setFilter(item.value)}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Account List */}
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => (
          <View style={styles.accountCard}>
            <Text style={styles.accountText}>
              <Text style={styles.boldText}>Mã người dùng:</Text> {item.user_id}
            </Text>
            <Text style={styles.accountText}>
              <Text style={styles.boldText}>Họ tên:</Text> {item.fullName}
            </Text>
            <Text style={styles.accountText}>
              <Text style={styles.boldText}>Giới tính:</Text> {item.gender}
            </Text>
            <Text style={styles.accountText}>
              <Text style={styles.boldText}>Số điện thoại:</Text> {item.phone}
            </Text>
            <Text style={styles.accountText}>
              <Text style={styles.boldText}>Vai trò:</Text> {item.role}
            </Text>
            <TouchableOpacity
              onPress={() => handleDetailPress(item.index)}
              style={styles.detailButton}
            >
              <Text style={styles.detailButtonText}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  menuButton: {
    fontSize: 24,
    color: "#4A90E2",
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  searchInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  dropdown: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  addButton: {
    marginLeft: 10,
    width: 45,
    height: 45,
    backgroundColor: "#4A90E2",
    borderRadius: 45 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  accountCard: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    marginBottom: 10,
  },
  accountText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  detailButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  detailButtonText: {
    color: "#4A90E2",
    fontSize: 14,
  },
});

export default AccountList;
