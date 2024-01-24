import { createContext, useReducer } from 'react';

const TaskContext = createContext();

const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

function taskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.text, completed: false };
            return [...state, newTask];
        case COMPLETE_TASK:
            return state.map((task) => 
                task.id === action.id ? { ...task, completed: true } : task
            );
        case REMOVE_TASK:
            return state.filter((task) => task.id !== action.id);
        default: 
            return state;
    }
}

function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

// exports
export { TaskProvider, ADD_TASK, COMPLETE_TASK, REMOVE_TASK, TaskContext };
