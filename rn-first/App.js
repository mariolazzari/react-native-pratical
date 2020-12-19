import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// component
const App = () => {
  const [text, setText] = useState("First text");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        title="Change text"
        onPress={() =>
          setText("Text changed: " + new Date().toLocaleTimeString())
        }
      />
    </View>
  );
};

// component styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
