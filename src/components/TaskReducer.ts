import TaskComponentActions from "./TaskComponentActions";
import TaskState from "./TaskState";

const TaskReducer = (state: TaskState, action: TaskComponentActions): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload]};
        case 'REMOVE_TASK':
            return {...state, tasks: state.tasks.filter(tasks => tasks.id !== action.payload)};
        case 'EDIT_TASK':
            return {...state, tasks: state.tasks.map(task => 
                task.id === action.payload.id ? {...task, name: action.payload.name } : task)};
        default:
            return state;
    };
};

export default TaskReducer;