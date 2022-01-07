import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";
import useFetch from "../Components/useFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ip from "../Constants/ip";

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const [id, setId] = useState("");
  const { data: allAccounts } = useFetch(`${ip.ip}/account`);
  useEffect(() => {
    setAccounts(allAccounts);
    // console.log(allAccounts);
  }, [allAccounts, accounts]);
  console.log("this is signup is :::::::::::::: ", id);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@userData");
  //     if (value !== null) {
  //       console.log("newwwwww =======", value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@userData");
      jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(jsonValue);
      // setId(JSON.parse(jsonValue).result.userExist._id);
      setId(JSON.parse(jsonValue)._id);
    } catch (e) {
      // error reading value
    }
  };
  getData();

  const [transactions, setTransactions] = useState([]);
  const { data: allTransactions } = useFetch(`${ip.ip}/expense`);

  useEffect(() => {
    setTransactions(allTransactions);
    // console.log(allTransactions);
  }, [allTransactions, transactions]);

  let sum = 0;
  accounts &&
    accounts.map((account) =>
      account.signedInUserID === id
        ? (sum = parseInt(account.cash) + sum)
        : null
    );
  console.log(sum);

  const navigation = useNavigation();

  const goToAllAccounts = () => {
    navigation.navigate(NavigationStrings.ACCOUNTS);
  };

  const goToAllTransactions = () => {
    navigation.navigate(NavigationStrings.TRANSACTIONS);
  };
  const goToAddAccount = () => {
    navigation.navigate(NavigationStrings.ADDACCOUNT);
  };
  const goToAddTransactions = () => {
    navigation.navigate(NavigationStrings.ADDTRANSACTION);
  };

  //   const goToSignup = () => {
  //     navigation.navigate(NavigationStrings.SIGNUP);
  //   };

  //   const goToSignup = () => {
  //     navigation.navigate(NavigationStrings.SIGNUP);
  //   };

  return (
    <View>
      <Headers title="Money" style={styles.header} />
      <View style={styles.card}>
        <Card style={styles.cardView}>
          <View style={styles.align}>
            <Text style={{ fontSize: 20 }}>What You Have</Text>
            <Text style={{ color: "gray" }} onPress={goToAllAccounts}>
              All Accounts
            </Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.color}>PKR {sum}</Text>
          </View>

          <View style={styles.list}>
            {accounts &&
              accounts.map((account) =>
                account.signedInUserID === id ? (
                  <Card style={styles.cardMargin}>
                    <Text>{account.accountName}</Text>
                    <Text style={{ color: Colors.primary, fontSize: 12 }}>
                      PKR {account.cash}
                    </Text>
                  </Card>
                ) : null
              )}
            <TouchableOpacity onPress={goToAddAccount}>
              <Card style={styles.cardMargin}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 30,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      // width: 30,
                      color: Colors.primary,
                    }}

                    // onPress={getData}
                  >
                    +
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      {/* transactions */}
      <View style={styles.head}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Transactions</Text>
        <Text
          style={{ color: "gray", fontSize: 12 }}
          onPress={goToAllTransactions}
        >
          VIEW ALL
        </Text>
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
        <TouchableOpacity onPress={goToAddTransactions}>
          <Card style={styles.cardMargin}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  // width: 30,
                  color: Colors.primary,
                }}
              >
                +
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   header: {
  //     height: 100,
  //   },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  cardView: {
    width: "80%",
  },
  color: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  number: {
    marginVertical: 10,
  },
  align: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardMargin: {
    margin: 5,
    padding: 15,
  },
  head: {
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
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

export default Home;
