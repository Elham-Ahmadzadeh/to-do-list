import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./Interface";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  /**
if a function doesnt return anything type is Void 
*/
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  // onClick
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };
  const removeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            placeholder="Task..."
            value={task}
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline(in Days)"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="toDoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} removeTask={removeTask} task={task} />;
        })}
      </div>
    </div>
  );
};

export default App;
