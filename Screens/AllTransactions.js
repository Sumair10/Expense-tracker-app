import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";
import useFetch from "../Components/useFetch";
import date from "../Constants/date";
import ip from "../Constants/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AllTransactions = () => {
  const navigation = useNavigation();
  var dates = date.myDate;
  const [transactions, setTransactions] = useState([]);
  const { data: allTransactions } = useFetch(`${ip.ip}/expense`);
  const [id, setId] = useState("");

  useEffect(() => {
    setTransactions(allTransactions);
    console.log(allTransactions);
  }, [allTransactions, transactions]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@userData");
      jsonValue != null ? JSON.parse(jsonValue) : null;
      setId(JSON.parse(jsonValue)._id);
    } catch (e) {
      // error reading value
    }
  };
  getData();
  return (
    <View>
      <Headers title="History" />

      <View style={styles.head}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Transactions</Text>
      </View>
      <View style={styles.mainTran}>
        {transactions &&
          transactions.map((transaction) =>
            transaction.signedInUserID === id ? (
              <Card style={{ width: "80%", margin: 2 }}>
                <View style={styles.transactions}>
                  <Text style={{ fontSize: 15 }}>
                    {transaction.category || transaction.transaction}
                  </Text>
                  <Text style={{ color: Colors.primary }}>
                    PKR {transaction.cash}
                  </Text>
                </View>
                <View style={styles.transactions}>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    {transaction.account}
                  </Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>
                    {transaction.date}
                  </Text>
                </View>
              </Card>
            ) : null
          )}
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
