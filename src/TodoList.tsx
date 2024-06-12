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

    let tasksList: Array<JSX.Element> | JSX.Element;
    if (tasks.length === 0) {
        tasksList = <span>Your TasksList is empty</span>
    } else {
        const listItems:Array<JSX.Element>=[]
        for (let i=0; i<tasks.length; i++) {
            const newListItems = <li>
                <input type="checkbox" checked={tasks[i].isDone}/>
                <span>{tasks[i].title}</span>
                <button>x</button>
            </li>
            listItems.push(newListItems)
        }
        tasksList=<ul>{listItems}</ul>
    }


    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            {/*<ul>*/}
            {/*    {tasks.map((task: TaskType) => (*/}
            {/*        <li key={task.id}>*/}
            {/*            <input type="checkbox" checked={task.isDone}/>*/}
            {/*            <span>{task.title}</span>*/}
            {/*            <button>x</button>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

