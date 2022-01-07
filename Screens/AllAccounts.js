import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";
import useFetch from "../Components/useFetch";
import ip from "../Constants/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AllAccounts = (props) => {
  const [accounts, setAccounts] = useState([]);
  const { data: allAccounts } = useFetch(`${ip.ip}/account`);
  const [id, setId] = useState("");
  // console.log("all accounts", accounts);

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

  useEffect(() => {
    setAccounts(allAccounts);
    // console.log(allAccounts);
    // console.log("idddddddddddddddddddddddd : ", id);
  }, [allAccounts, accounts, id]);

  let sum = 0;
  accounts &&
    accounts.map((account) =>
      account.signedInUserID === id
        ? (sum = parseInt(account.cash) + sum)
        : null
    );
  console.log(sum);

  //   console.log(allAccounts);
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
            <Text style={styles.color}>PKR {sum}</Text>
          </View>
        </Card>
      </View>
      {accounts &&
        accounts.map((account) =>
          account.signedInUserID === id ? (
            <View style={styles.list}>
              <Card style={styles.cardMargin}>
                <Text style={styles.accounts}>{account.accountName}</Text>
                <Text style={{ color: Colors.primary, fontSize: 15 }}>
                  PKR {account.cash}
                </Text>
              </Card>
            </View>
          ) : null
        )}
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
