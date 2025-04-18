import React, { useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import TaskState from "./TaskState";
import { ReactNode } from "react";

const initialState: TaskState = {
    tasks: []
};

interface Props {
    children: ReactNode;
}

const TaskProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return(
        <TaskContext.Provider value ={{ state, dispatch }}>
            { children }
        </TaskContext.Provider>
    )
};

export default TaskProvider;