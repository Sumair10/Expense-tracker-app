import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";

const Income = () => {
  const navigation = useNavigation();

  const goToAddAccount = () => {
    navigation.navigate(NavigationStrings.ADDACCOUNT);
  };
  const goToHome = () => {
    navigation.navigate(NavigationStrings.HOME);
  };

  return (
    <View>
      <View style={styles.inputFiels}>
        <TextInput
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
        <Text style={styles.head}>Select Account</Text>
      </View>
      <View style={styles.list}>
        <Card style={styles.cardMargin}>
          <Text>Cash</Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text>Meezan Bank</Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text>SadaPay</Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text>JaazCash</Text>
        </Card>
        <Card style={styles.cardMargin}>
          <Text
            style={{ fontSize: 20, color: Colors.primary }}
            onPress={goToAddAccount}
          >
            +
          </Text>
        </Card>
      </View>

      <View style={styles.inputFiels1}>
        <Button title="FINISH" color={Colors.primary} onPress={goToHome} />
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
});

export default Income;
