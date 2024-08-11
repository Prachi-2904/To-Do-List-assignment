import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";


export const Forms = ({ task, setTask }) => {
    const [name, setName] = useState(task ? task.name : '');
    const [assignedTo, setAssignedTo] = useState(task ? task.assignedTo : '');
    const [status, setStatus] = useState(task ? task.status : 'Pending');
    const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
    const [priority, setPriority] = useState(task ? task.priority : 'Medium');
    const [description, setDescription] = useState(task ? task.description : '');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { name, assignedTo, status, dueDate, priority, description };
        
        if(taskData){
        dispatch(addNewTodo(taskData));
        resetForm();
        }
    };

    const resetForm = () => {
        setName('');
        setAssignedTo('');
        setStatus('Pending');
        setDueDate('');
        setPriority('Medium');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Task Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Task Name"
                    required
                />
            </div>

            <div>
                <label>Assigned To</label>
                <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required>
                    <option value="">Select Assignee</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                    <option value="Tom Johnson">Tom Johnson</option>
                </select>
            </div>

            <div>
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div>
                <label>Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                    required
                />
            </div>

            <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

