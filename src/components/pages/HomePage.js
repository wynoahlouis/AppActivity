import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export default function HomePage({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Button
        // icon="logout"
        mode="contained"
        style={{ marginTop: 10, marginLeft:50, marginRight:50, backgroundColor:'#DA0C81',
        padding: 15, textAlign: 'center'}}
        onPress={() => navigation.navigate("Login")}
      >
        Logout
      </Button>
    </View>
  );
}

