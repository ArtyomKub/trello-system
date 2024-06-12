import React from 'react';

type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    isDone: boolean
    title: string
}
export const TodoList: React.FC<TodoListPropsType> = ({title, tasks}) => {
    // const {title, tasks} = props

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map((task: TaskType) => (
                    <li key={task.id}>
                        <input type='checkbox' checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

