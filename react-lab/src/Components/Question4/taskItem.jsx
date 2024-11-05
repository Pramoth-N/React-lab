import React from "react";

const TaskItem = ({ name, completed }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
        margin: "5px 0",
        backgroundColor: completed ? "#e0ffe0" : "#ffe0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{name}</span>
      <span style={{ fontWeight: "bold", color: completed ? "green" : "red" }}>
        {completed ? "Completed" : "Not Completed"}
      </span>
    </div>
  );
};

export default TaskItem;
