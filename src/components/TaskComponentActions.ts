import Task from "./Task";

type TaskComponentActions =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'REMOVE_TASK'; payload: number }
    | { type: 'EDIT_TASK'; payload: { id:number; name: string }};

export default TaskComponentActions;