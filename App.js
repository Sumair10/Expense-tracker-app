import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./Routes/Routes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({});
