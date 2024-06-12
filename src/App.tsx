import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';


export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    const todoListTitle:string = 'What to learn'

    const [tasks, setTasks] = useState<Array<TaskType>>([
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

    const [filter, setFilter] = useState<FilterValueType>('all')
    const getFilteredTasksForRender = (allTasks: Array<TaskType>, filterValue: FilterValueType): Array<TaskType> => {
        switch (filterValue) {
            case 'active':
                return allTasks.filter(t => !t.isDone)
            case 'completed':
                return allTasks.filter(t => t.isDone)
            default:
                return allTasks
        }
    }

    const changeFilter = (nextFilterValue:FilterValueType)=> {
        setFilter(nextFilterValue)
    }

    const filteredTaskForRender: Array<TaskType> = getFilteredTasksForRender(tasks, filter)

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={filteredTaskForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
