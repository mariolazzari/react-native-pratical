import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// compoent
const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete.bind(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// compoennt styles
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
