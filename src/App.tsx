import React, {useState} from 'react';
import './App.css';
import {TodoList} from './TodoList';


function App() {

    const todoListTitle = 'What to learn'

    const [tasks, setTasks] = useState([
        {id: 1, isDone: true, title: 'HTML&CSS'},
        {id: 2, isDone: false, title: 'JS'},
        {id: 3, isDone: true, title: 'REACT'},
        {id: 4, isDone: false, title: 'CSS'},
    ])


    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
