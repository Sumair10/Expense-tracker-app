import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Headers from "../Components/Headers";
import NavigationStrings from "../Constants/NavigationStrings";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";
const Home = () => {
  const navigation = useNavigation();

  const goToAllAccounts = () => {
    navigation.navigate(NavigationStrings.ACCOUNTS);
  };

  const goToAllTransactions = () => {
    navigation.navigate(NavigationStrings.TRANSACTIONS);
  };
  const goToAddAccount = () => {
    navigation.navigate(NavigationStrings.ADDACCOUNT);
  };
  const goToAddTransactions = () => {
    navigation.navigate(NavigationStrings.ADDTRANSACTION);
  };

  //   const goToSignup = () => {
  //     navigation.navigate(NavigationStrings.SIGNUP);
  //   };

  //   const goToSignup = () => {
  //     navigation.navigate(NavigationStrings.SIGNUP);
  //   };

  return (
    <View>
      <Headers title="Money" style={styles.header} />
      <View style={styles.card}>
        <Card style={styles.cardView}>
          <View style={styles.align}>
            <Text style={{ fontSize: 20 }}>What You Have</Text>
            <Text style={{ color: "gray" }} onPress={goToAllAccounts}>
              All Accounts
            </Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.color}>PKR 20,000</Text>
          </View>
          <View style={styles.list}>
            <Card style={styles.cardMargin}>
              <Text style={styles.accounts}>Cash</Text>
              <Text style={{ color: Colors.primary, fontSize: 12 }}>
                PKR 4000
              </Text>
            </Card>
            <Card style={styles.cardMargin}>
              <Text>Meezan Bank</Text>
              <Text style={{ color: Colors.primary, fontSize: 12 }}>
                PKR 10,000
              </Text>
            </Card>
            <Card style={styles.cardMargin}>
              <Text>SadaPay</Text>
              <Text style={{ color: Colors.primary, fontSize: 12 }}>
                PKR 1000
              </Text>
            </Card>
            <Card style={styles.cardMargin}>
              <Text>Jaaz Cash</Text>
              <Text style={{ color: Colors.primary, fontSize: 12 }}>
                PKR 4000
              </Text>
            </Card>
            <Card style={styles.cardMargin}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    // width: 30,
                    color: Colors.primary,
                  }}
                  onPress={goToAddAccount}
                >
                  +
                </Text>
              </View>
            </Card>
          </View>
        </Card>
      </View>
      {/* transactions */}
      <View style={styles.head}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Transactions</Text>
        <Text
          style={{ color: "gray", fontSize: 12 }}
          onPress={goToAllTransactions}
        >
          VIEW ALL
        </Text>
      </View>
      <View style={styles.mainTran}>
        <Card style={{ width: "80%", margin: 2 }}>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 15 }}>Salary</Text>
            <Text style={{ color: Colors.primary }}>PKR 1500</Text>
          </View>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 12, color: "gray" }}>Meezan Bank</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>24 Dec, Fri</Text>
          </View>
        </Card>
        <Card style={{ width: "80%", margin: 2 }}>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 15 }}>Salary</Text>
            <Text style={{ color: Colors.primary }}>PKR 1500</Text>
          </View>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 12, color: "gray" }}>Meezan Bank</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>24 Dec, Fri</Text>
          </View>
        </Card>
        <Card style={{ width: "80%", margin: 2 }}>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 15 }}>Salary</Text>
            <Text style={{ color: Colors.primary }}>PKR 1500</Text>
          </View>
          <View style={styles.transactions}>
            <Text style={{ fontSize: 12, color: "gray" }}>Meezan Bank</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>24 Dec, Fri</Text>
          </View>
        </Card>
        <Card style={styles.cardMargin}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 30,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                // width: 30,
                color: Colors.primary,
              }}
              onPress={goToAddTransactions}
            >
              +
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   header: {
  //     height: 100,
  //   },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  cardView: {
    width: "80%",
  },
  color: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  number: {
    marginVertical: 10,
  },
  align: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardMargin: {
    margin: 5,
    padding: 15,
  },
  head: {
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  transactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "80%",
    alignItems: "center",
  },
  mainTran: {
    // width: "80%",
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
