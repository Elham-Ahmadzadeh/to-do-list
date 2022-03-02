import React from 'react'
import { ITask } from '../Interface'
interface Props {
    task: ITask

}
const TodoTask = ({task}: Props) => {
    return (
        <div className="task">
          <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
          </div>
          <button
            onClick={() => {
              completeTask(task.taskName);
            }}
          >
            X
          </button>
        </div>
      );
}

export default TodoTask