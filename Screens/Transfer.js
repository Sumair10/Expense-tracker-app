import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";
import useFetch from "../Components/useFetch";
import ip from "../Constants/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";
import date from "../Constants/date";

const Transfer = () => {
  const [payFromIndex, setPayFromIndex] = useState("");
  const [payToIndex, setPayToIndex] = useState("");
  console.log(payFromIndex);
  console.log(payToIndex);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [fromID, setFromID] = useState("");
  const [toID, setToID] = useState("");

  const [fromCash, setFromCash] = useState("");
  const [toCash, setToCash] = useState("");

  const [cash1, setCash1] = useState("");
  const [id, setId] = useState("");

  // console.log("accountIndex : ", selectedAccountIndex);
  // console.log("account : ", account);
  // console.log("categoryIndex : ", selectedCategoryIndex);
  // console.log("category : ", category);
  // console.log("accountID : ", accountID);
  // console.log("account cash : ", accountCash);

  const [accounts, setAccounts] = useState([]);
  const { data: allAccounts } = useFetch(`${ip.ip}/account`);

  useEffect(() => {
    setAccounts(allAccounts);
    console.log(allAccounts);
  }, [allAccounts, accounts]);

  const navigation = useNavigation();

  const goToAddAccount = () => {
    navigation.navigate(NavigationStrings.ADDACCOUNT);
  };

  const goToHome = () => {
    navigation.navigate(NavigationStrings.HOME);
  };

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
  const handleSubmit = (e) => {
    e.preventDefault();

    const fromCash1 = parseInt(fromCash) - parseInt(cash1);
    console.log(fromCash1);
    const toCash1 = parseInt(toCash) + parseInt(cash1);
    // console.log("updated cash :: ", cash);
    console.log(toCash1);
    const addAccount = {
      signedInUserID: id,
      cash: cash1,
      from,
      to,
      transaction: "Transfer",
    };

    const updateFromAccount = { cash: fromCash1 };
    const updateToAccount = { cash: toCash1 };

    fetch(`${ip.ip}/account/` + fromID, {
      method: "PATCH",
      headers: { "content-Type": " application/json" },
      body: JSON.stringify(updateFromAccount),
    }).then(() => {
      console.log("data edit successful");
    });

    fetch(`${ip.ip}/account/` + toID, {
      method: "PATCH",
      headers: { "content-Type": " application/json" },
      body: JSON.stringify(updateToAccount),
    }).then(() => {
      console.log("data edit successful");
    });
    navigation.navigate(NavigationStrings.HOME);
    // fetch(`${ip.ip}/expense`, {
    //   method: "POST",
    //   headers: { "content-Type": " application/json" },
    //   body: JSON.stringify(addAccount),
    // }).then(() => {
    //   console.log("data added successful");
    //
    // });
  };

  return (
    <View>
      <View>
        <View style={styles.inputFiels}>
          <TextInput
            onChangeText={(cash1) => setCash1(cash1)}
            value={cash1}
            placeholder="PKR 0"
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={5}
            required
          ></TextInput>
        </View>

        <View style={{ marginLeft: 30 }}>
          <Text style={styles.head}>Pay From</Text>
        </View>
        <View style={styles.list}>
          {accounts &&
            accounts.map((account, index) =>
              account.signedInUserID === id ? (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setPayFromIndex(index),
                      setFrom(account.accountName),
                      setFromID(account._id),
                      setFromCash(account.cash);
                  }}
                >
                  <Card
                    style={
                      payFromIndex === index
                        ? styles.cardMargin1
                        : styles.cardMargin
                    }
                  >
                    <Text
                      style={
                        payFromIndex === index ? styles.color : styles.color1
                      }
                    >
                      {account.accountName}
                    </Text>
                  </Card>
                </TouchableOpacity>
              ) : null
            )}
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text style={styles.head1}>Pay To</Text>
        </View>
        <View style={styles.list}>
          {accounts &&
            accounts.map((account, index) =>
              account.signedInUserID === id ? (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setPayToIndex(index),
                      setTo(account.accountName),
                      setToID(account._id),
                      setToCash(account.cash);
                  }}
                >
                  <Card
                    style={
                      payToIndex === index
                        ? styles.cardMargin1
                        : styles.cardMargin
                    }
                  >
                    <Text
                      style={
                        payToIndex === index ? styles.color : styles.color1
                      }
                    >
                      {account.accountName}
                    </Text>
                  </Card>
                </TouchableOpacity>
              ) : null
            )}
        </View>

        <View style={styles.inputFiels1}>
          <Button
            title="FINISH"
            color={Colors.primary}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  head1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
  },
  input: {
    width: "70%",
    borderColor: "black",
    // borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: Colors.primary,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    margin: 50,
    marginTop: 100,
  },
  inputFiels: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFiels1: {
    // width: "80%",
    // alignItems: "center",
    marginVertical: 50,
    justifyContent: "center",
    margin: 20,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  cardMargin: {
    margin: 5,
    padding: 15,
  },
  cardMargin1: {
    backgroundColor: Colors.primary,
    color: "white",
    borderColor: Colors.primary,
    elevation: 20,
  },
  color: {
    color: "white",
  },
  color1: {
    color: "black",
  },
});

export default Transfer;
