import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Headers from "../Components/Headers";
import Colors from "../Constants/Colors";
import NavigationStrings from "../Constants/NavigationStrings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ip from "../Constants/ip";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const goToSignup = () => {
    navigation.navigate(NavigationStrings.SIGNUP);
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@userData", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signinBody = {
      email: email.toLowerCase().trim(),
      password: password.trim(),
    };
    console.log(signinBody);
    fetch(`${ip.ip}/auth/signin`, {
      method: "POST",
      headers: { "content-Type": " application/json" },
      body: JSON.stringify(signinBody),
    })
      .then((res) => res.json())
      .then((res) => {
        storeData(res.result.userExist);
        console.log("email :::::: ", res.result.statusCode);
        if (res.result.statusCode === 200) {
          navigation.navigate(NavigationStrings.HOME);
        } else {
          return;
        }
      });
  };

  return (
    <View>
      <Headers title="Signin" />
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>Email</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            value={email}
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 20 }}>Password</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
        </View>

        <View style={styles.inputFielsS}>
          <Button
            title="Signin"
            color={Colors.primary}
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.already}>
          <Text style={styles.inputFiels}>Don't have an account ? </Text>
          <Text style={{ color: Colors.primary }} onPress={goToSignup}>
            {" "}
            Sign up
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
    marginTop: 150,
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

export default Signin;

// import React from 'react'
// import {View , Text , StyleSheet , Button } from 'react-native'
// import Headers from '../Components/Headers';
// import NavigationStrings from "../Constants/NavigationStrings";

// const  Signup = () =>{
//     return (
//         <View>
//             <Headers title="Signin" />
//         </View>
//     )
// }

// const styles = StyleSheet.create({

// })

// export default Signup
