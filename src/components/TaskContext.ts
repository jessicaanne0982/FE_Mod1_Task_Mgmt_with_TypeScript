import { createContext, useContext } from "react";
import Task from "./Task";
import TaskComponentActions from "./TaskComponentActions";

interface TaskContextValue {
    state: { tasks: Task[] };
    dispatch: React.Dispatch<TaskComponentActions>;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error ('Use TaskContext must be used with a TaskProvider');
    }
    return context;
};

export default TaskContext;