import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';


type FilterType = 'all' | 'active' | 'completed'

function App() {

    const todoListTitle = 'What to learn'

    const [tasks, setTasks] = useState([
        {id: 1, isDone: true, title: 'HTML&CSS'},
        {id: 2, isDone: false, title: 'JS'},
        {id: 3, isDone: true, title: 'REACT'},
        {id: 4, isDone: false, title: 'CSS'},
    ])

    const removeTask = (taskId: number) => {
        const newTask: Array<TaskType> = []
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== taskId) {
                newTask.push(tasks[i])
            }
        }
        setTasks(newTask)
    }

    const [filter, setFilter] = useState<FilterType>('all')


    const filteredTaskForRender:Array<TaskType> = getFilteredTasksForRender()


    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
