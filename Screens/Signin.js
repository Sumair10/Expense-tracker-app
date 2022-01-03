import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Headers from "../Components/Headers";
import Colors from "../Constants/Colors";
import NavigationStrings from "../Constants/NavigationStrings";

const Signin = () => {
  const navigation = useNavigation();

  const goToSignup = () => {
    navigation.navigate(NavigationStrings.SIGNUP);
  };

  return (
    <View>
      <Headers title="Signin" />
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>
        <Text>Password</Text>
        <View style={styles.inputFiels}>
          <TextInput
            placeholder="Enter Password"
            style={styles.input}
            //   onChangeText={goalInputHandler}
            //   value={textEntered}
          ></TextInput>
        </View>

        <View style={styles.inputFielsS}>
          <Button title="Signin" color={Colors.primary} />
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
