import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../Screens/Signup";
import Signin from "../Screens/Signin";
import Home from "../Screens/Home";
import AllAccounts from "../Screens/AllAccounts";
import AllTransactions from "../Screens/AllTransactions";
import AddAccount from "../Screens/AddAccount";
import AddTransaction from "../Screens/AddTransaction";
import NavigationStrings from "../Constants/NavigationStrings";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NavigationStrings.SIGNUP}
      >
        <Stack.Screen name={NavigationStrings.SIGNUP} component={Signup} />
        <Stack.Screen name={NavigationStrings.SIGNIN} component={Signin} />
        <Stack.Screen name={NavigationStrings.HOME} component={Home} />
        <Stack.Screen
          name={NavigationStrings.ACCOUNTS}
          component={AllAccounts}
        />
        <Stack.Screen
          name={NavigationStrings.TRANSACTIONS}
          component={AllTransactions}
        />
        <Stack.Screen
          name={NavigationStrings.ADDACCOUNT}
          component={AddAccount}
        />
        <Stack.Screen
          name={NavigationStrings.ADDTRANSACTION}
          component={AddTransaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
