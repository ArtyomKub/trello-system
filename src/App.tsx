import React from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';


function App() {

    const todoListTitle_1 = 'What to learn'
    // const todoListTitle_1 = 'What to learn'
    const todoListTitle_2 = 'What to buy'
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: 'HTML&CSS'},
        {id: 2, isDone: false, title: 'JS'},
        {id: 3, isDone: true, title: 'REACT'},
        {id: 4, isDone: false, title: 'CSS'},
    ]

    const tasks_2: Array<TaskType> = [
        {id: 1, isDone: false, title: 'Coffee'},
        {id: 2, isDone: true, title: 'Juice'},
        {id: 3, isDone: false, title: 'Meat'},
        {id: 4, isDone: true, title: 'Chease'},
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
