import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./Components/Store";

export default function App() {
  return (
    // <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({});
