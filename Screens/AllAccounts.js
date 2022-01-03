import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";

const AllAccounts = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Headers title="All Accounts" />

      <View style={styles.card}>
        <Card style={styles.cardView}>
          <View style={styles.align}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              All Accounts
            </Text>
            <Text style={{ fontSize: 15, color: "gray" }}>What You Have</Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.color}>PKR 20,000</Text>
          </View>
        </Card>
      </View>

      <View style={styles.list}>
        <Card style={styles.cardMargin}>
          <Text style={styles.accounts}>Cash</Text>
          <Text style={{ color: Colors.primary, fontSize: 15 }}>PKR 4000</Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text style={styles.accounts}>Meezan Bank</Text>
          <Text style={{ color: Colors.primary, fontSize: 15 }}>
            PKR 10,000
          </Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text style={styles.accounts}>SadaPay</Text>
          <Text style={{ color: Colors.primary, fontSize: 15 }}>PKR 1000</Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text style={styles.accounts}>Jaaz Cash</Text>
          <Text style={{ color: Colors.primary, fontSize: 15 }}>PKR 4000</Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
  },

  cardView: {
    width: "90%",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  align: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  color: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  number: {
    marginVertical: 10,
    alignItems: "flex-end",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  accounts: {
    fontSize: 18,
  },

  cardMargin: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 15,
  },
});

export default AllAccounts;
