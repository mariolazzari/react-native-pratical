import React, { useState } from "react";
import "./App.css";
import NewGoal from "./components/NewGoal/NewGoal";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 1, text: "Goals one" },
    { id: 2, text: "Goals two" },
    { id: 3, text: "Goals three" },
  ]);

  const onGoalAdd = goal => {
    setCourseGoals(prevGoals => [...prevGoals, goal]);
  };

  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal onAdd={onGoalAdd} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
