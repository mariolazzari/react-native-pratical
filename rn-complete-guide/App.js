import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
// components
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// component
const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle === "") {
      return;
    }

    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={() => setIsAddMode(false)}
      />
      <FlatList
        keyExtractor={(item, _index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

// compoennt styles
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
