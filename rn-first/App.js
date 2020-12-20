import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// components
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

// component
const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
};

// component styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
