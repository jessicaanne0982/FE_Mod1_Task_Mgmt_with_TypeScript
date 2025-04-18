import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { useTaskContext } from "./TaskContext";
import Task from "./Task";

const TaskComponent: React.FC = () => {
    const { state, dispatch}  = useTaskContext();
    const [taskName, setTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedTaskName, setEditedTaskName] = useState('');

    const addTask = (e:React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = { id:Date.now(), name: taskName };
        dispatch({ type:'ADD_TASK', payload: newTask });
        setTaskName('');
    };

    const removeTask = (taskId: number) => {
        dispatch({ type: 'REMOVE_TASK', payload: taskId });
    };

    const editTask = (taskId: number) => {
        const taskToEdit = state.tasks.find(task => task.id === taskId);
        if (taskToEdit) {
            setEditingTaskId(taskId);
            setEditedTaskName(taskToEdit.name);
        }
    };

    const saveEditedTask = (taskId: number) => {
        if (!editedTaskName.trim()) return;
        dispatch({type: 'EDIT_TASK', payload: { id: taskId, name: editedTaskName } });
        setEditingTaskId(null);
        setEditedTaskName('');
    };

    const cancelEdit = () => {
        setEditingTaskId(null);
        setEditedTaskName('');
    };

    return (
        <div className="mx-auto">
            <Form onSubmit={addTask} className="mb-4">
                <Form.Group controlId="taskInput">
                <Form.Control
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter new task..."
                    style={{ width: "100%" }}
                />
            </Form.Group>
                
            <Button variant="primary" type="submit" className="mt-2">Add Task</Button>
            </Form>

            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th style={{ width: "70%" }}>Task</th>
                        <th style={{ width: "30%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.tasks.map((task) => (
                        <tr key={task.id}>
                            <td className="text-start align-middle">
                                {editingTaskId === task.id ? (
                                    <input
                                    type="text"
                                    value={editedTaskName}
                                    onChange={(e) => setEditedTaskName(e.target.value)}
                                    autoFocus
                                    />
                                ) : (
                                    task.name
                                )}
                            </td>
                            <td className="text-center">
                                {editingTaskId === task.id ? (
                                    <>
                                        <Button
                                            variant="success"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => saveEditedTask(task.id)}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            onClick={cancelEdit}
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                ): (
                                    <>
                                        <Button
                                            variant="warning"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => editTask(task.id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => removeTask(task.id)}
                                        >
                                            Delete
                                        </Button>
                                    </>
                                )}
                                
                                
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TaskComponent;