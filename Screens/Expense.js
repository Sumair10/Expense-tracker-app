import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  keyboardType,
  TouchableOpacity,
} from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";
import useFetch from "../Components/useFetch";
import date from "../Constants/date";
import ip from "../Constants/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Expense = () => {
  //     let today = new Date().toLocaleDateString();
  //   console.log("date : ", today);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState("");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState("");

  const [account, setAccount] = useState("");
  const [category, setCategory] = useState("");

  const [accountID, setAccountID] = useState("");

  const [accountCash, setAccountCash] = useState("");
  const [cash1, setCash1] = useState("");
  const [id, setId] = useState("");
  console.log("accountIndex : ", selectedAccountIndex);
  console.log("account : ", account);
  console.log("categoryIndex : ", selectedCategoryIndex);
  console.log("category : ", category);
  console.log("accountID : ", accountID);
  console.log("account cash : ", accountCash);

  const [accounts, setAccounts] = useState([]);
  const { data: allAccounts } = useFetch(`${ip.ip}/account`);
  const categories = [
    "Home",
    "Committee",
    "Shopping",
    "Food",
    "Family",
    "Mobile",
    "Gifts",
  ];

  useEffect(() => {
    setAccounts(allAccounts);
    console.log(allAccounts);
  }, [allAccounts, accounts]);

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
  const navigation = useNavigation();

  const goToAddAccount = () => {
    navigation.navigate(NavigationStrings.ADDACCOUNT);
  };

  const goToHome = () => {
    navigation.navigate(NavigationStrings.HOME);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    const cash = accountCash - cash1;
    console.log("updated cash :: ", cash);
    const addAccount = {
      signedInUserID: id,
      cash: `-${cash1}`,
      category,
      account,
      transaction: "Expense",
      date: date.myDate,
    };
    const updateAccount = { cash };

    fetch(`${ip.ip}/account/` + accountID, {
      method: "PATCH",
      headers: { "content-Type": " application/json" },
      body: JSON.stringify(updateAccount),
    }).then(() => {
      console.log("data edit successful");
    });

    fetch(`${ip.ip}/expense`, {
      method: "POST",
      headers: { "content-Type": " application/json" },
      body: JSON.stringify(addAccount),
    }).then(() => {
      console.log("data added successful");
      navigation.navigate(NavigationStrings.HOME);
    });
  };

  return (
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
        ></TextInput>
      </View>
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.head}>Select Category</Text>
      </View>
      <View style={styles.list}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedCategoryIndex(index), setCategory(category);
            }}
          >
            <Card
              style={
                selectedCategoryIndex === index
                  ? styles.cardMargin1
                  : styles.cardMargin
              }
            >
              <Text
                style={
                  selectedCategoryIndex === index ? styles.color : styles.color1
                }
              >
                {category}
              </Text>
            </Card>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ marginLeft: 30 }}>
        <Text style={styles.head1}>Select Account</Text>
      </View>
      <View style={styles.list}>
        {accounts &&
          accounts.map((account, index) =>
            account.signedInUserID === id ? (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedAccountIndex(index),
                    setAccount(account.accountName),
                    setAccountID(account._id),
                    setAccountCash(account.cash);
                }}
              >
                <Card
                  style={
                    selectedAccountIndex === index
                      ? styles.cardMargin1
                      : styles.cardMargin
                  }
                >
                  <Text
                    style={
                      selectedAccountIndex === index
                        ? styles.color
                        : styles.color1
                    }
                  >
                    {account.accountName}
                  </Text>
                </Card>
              </TouchableOpacity>
            ) : null
          )}

        {/* <Card style={styles.cardMargin}>
          <Text
            style={{ fontSize: 20, color: Colors.primary }}
            onPress={goToAddAccount}
          >
            +
          </Text>
        </Card> */}
      </View>

      <View style={styles.inputFiels1}>
        <Button title="FINISH" color={Colors.primary} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "bold",
  },
  head1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
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

export default Expense;
