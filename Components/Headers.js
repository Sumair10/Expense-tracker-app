import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const Headers = (props) => {
  return (
    // <View style={styles.header}>
    <View style={{ ...styles.header, ...props.style }}>
      <Text style={styles.headerTitle}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Headers;
