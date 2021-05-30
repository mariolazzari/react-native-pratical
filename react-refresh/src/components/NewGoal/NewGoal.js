import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = props => {
  const [goal, setGoal] = useState("");

  const onTextChange = e => {
    setGoal(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (!goal) {
      return;
    }

    const newGoal = {
      id: Math.random().toString(),
      text: goal,
    };
    props.onAdd(newGoal);

    setGoal("");
  };

  return (
    <form className="new-goal" onSubmit={onFormSubmit}>
      <input type="text" value={goal} onChange={onTextChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
