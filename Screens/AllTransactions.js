import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";

const AllTransactions = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Headers title="History" />

      <View style={styles.head}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Transactions</Text>
        <Text style={{ color: "gray", fontSize: 12 }}>PKR 0</Text>
      </View>
      <View style={styles.mainTran}>
        <Card style={{ width: "80%", margin: 2 }}>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 15 }}>Salary</Text>
            <Text style={{ color: Colors.primary }}>PKR 1500</Text>
          </View>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 12, color: "gray" }}>Meezan Bank</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>24 Dec, Fri</Text>
          </View>
        </Card>
        <Card style={{ width: "80%", margin: 2 }}>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 15 }}>Salary</Text>
            <Text style={{ color: Colors.primary }}>PKR 1500</Text>
          </View>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 12, color: "gray" }}>Meezan Bank</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>24 Dec, Fri</Text>
          </View>
        </Card>
        <Card style={{ width: "80%", margin: 2 }}>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 15 }}>Salary</Text>
            <Text style={{ color: Colors.primary }}>PKR 1500</Text>
          </View>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 12, color: "gray" }}>Meezan Bank</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>24 Dec, Fri</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
    marginVertical: 40,
    marginBottom: 40,
  },
  transactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "80%",
    alignItems: "center",
  },
  mainTran: {
    // width: "80%",
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default AllTransactions;
