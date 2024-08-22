/* eslint-disable react/prop-types */
import S from './TaskManager.module.css';
import { TaskProvider } from './TaskManager/context';
import { UnpinnedTaskList } from './TaskManager/UnpinnedTaskList';
import { PinnedTaskList } from './TaskManager/PinnedTaskList';
import { AddTask } from './TaskManager/AddTask';

function TaskManager() {
  return (
    <TaskProvider>
      <div className={S.component}>
        <PinnedTaskList />
        <UnpinnedTaskList />
        <AddTask />
      </div>
    </TaskProvider>
  );
}

export default TaskManager;
