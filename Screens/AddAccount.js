import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";
import useFetch from "../Components/useFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ip from "../Constants/ip";
const AddAccount = () => {
  const [accountName, setAccountName] = useState("");
  const [cash, setCash] = useState("");
  const navigation = useNavigation();
  const [id, setId] = useState("");

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
    const addAccount = { signedInUserID: id, accountName, cash };

    fetch(`${ip.ip}/account`, {
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
      <Headers title="Add Account" />

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>Account Name</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Account Name"
            style={styles.input}
            value={accountName}
            onChangeText={(accountName) => setAccountName(accountName)}
          ></TextInput>
        </View>

        <Text style={{ fontSize: 20 }}>Cash</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Cash"
            style={styles.input}
            onChangeText={(cash) => setCash(cash)}
            value={cash}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={5}
          ></TextInput>
        </View>

        <View>
          <Button
            title="Add Account"
            color={Colors.primary}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "black",
    // borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: Colors.primary,
  },
  inputContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    margin: 50,
    marginTop: 100,
  },
  inputFiels: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "40%",
  },
  already: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default AddAccount;
