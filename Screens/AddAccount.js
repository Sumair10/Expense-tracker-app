import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";

const AddAccount = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate(NavigationStrings.HOME);
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
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 20 }}>Account Number</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Account Number"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 20 }}>Cash</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Cash"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>

        <View>
          <Button
            title="Add Account"
            color={Colors.primary}
            onPress={goToHome}
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
