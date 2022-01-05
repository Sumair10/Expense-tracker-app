import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Headers from "../Components/Headers";
import Colors from "../Constants/Colors";
import NavigationStrings from "../Constants/NavigationStrings";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const goToSignin = () => {
    navigation.navigate(NavigationStrings.SIGNIN);
  };
  const goToHome = () => {
    navigation.navigate(NavigationStrings.HOME);
  };

  return (
    <View>
      <Headers title="Signup" />
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>User Name</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter User Name"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 20 }}>Email</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 20 }}>Password</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Password"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>

        <View style={styles.inputFielsS}>
          <Button title="Signup" color={Colors.primary} onPress={goToHome} />
        </View>
        <View style={styles.already}>
          <Text style={styles.inputFiels}>Already have an account ? </Text>
          <Text style={{ color: Colors.primary }} onPress={goToSignin}>
            {" "}
            Sign in
          </Text>
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

export default Signup;
