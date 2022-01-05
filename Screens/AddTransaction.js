import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Colors from "../Constants/Colors";
import Card from "../Components/Card";
import Expense from "./Expense";
import Income from "./Income";
import Transfer from "./Transfer";

const AddTransaction = () => {
  const [expense, setExpense] = useState(true);
  const [income, setIncome] = useState(false);
  const [transfer, setTransfer] = useState(false);

  console.log(expense);

  const showExpense = () => {
    setExpense(true);
    setIncome(false);
    setTransfer(false);
  };
  const showIncome = () => {
    setExpense(false);
    setIncome(true);
    setTransfer(false);
  };
  const showTransfer = () => {
    setExpense(false);
    setIncome(false);
    setTransfer(true);
  };
  return (
    <View>
      <Headers title="Add Transaction" style={styles.header} />

      <View style={styles.data}>
        <Text
          style={expense ? styles.selected : styles.unselected}
          onPress={showExpense}
        >
          Expense
        </Text>
        <Text
          style={income ? styles.selected : styles.unselected}
          onPress={showIncome}
        >
          Income
        </Text>
        <Text
          style={transfer ? styles.selected : styles.unselected}
          onPress={showTransfer}
        >
          Transfer
        </Text>
      </View>

      {expense ? <Expense /> : null}
      {income ? <Income /> : null}
      {transfer ? <Transfer /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  data: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  selected: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    color: "white",
    borderColor: Colors.primary,
    elevation: 20,
  },
  unselected: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    color: Colors.primary,
    borderColor: Colors.primary,
    elevation: 20,
  },
});

export default AddTransaction;
