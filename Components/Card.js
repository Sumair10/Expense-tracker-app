import React from "react";
import { View, StyleSheet } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
