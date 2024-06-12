import React, {ReactElement} from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void;
    changeFilter: (nextFilterValue: FilterValueType) => void
}

export type TaskType = {
    id: number
    isDone: boolean
    title: string
}
export const TodoList: React.FC<TodoListPropsType> = ({title, tasks, removeTask, changeFilter}) => {

    // let tasksList: Array<JSX.Element> | JSX.Element;
    // if (tasks.length === 0) {
    //     tasksList = <span>Your TasksList is empty</span>
    // } else {
    //     const listItems:Array<JSX.Element>=[]
    //     for (let i=0; i<tasks.length; i++) {
    //         const newListItems = <li>
    //             <input type="checkbox" checked={tasks[i].isDone}/>
    //             <span>{tasks[i].title}</span>
    //             <button>x</button>
    //         </li>
    //         listItems.push(newListItems)
    //     }
    //     tasksList=<ul>{listItems}</ul>
    // }


    const listItem: Array<ReactElement> = tasks.map(t => {

        const onClickRemoveTaskHandler = () => {
            return (
                removeTask(t.id)
            )
        }

        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickRemoveTaskHandler}>X</button>
            </li>
        )
    })

    const tasksList: ReactElement = tasks.length
        ? <ul>{listItem}</ul>
        : <span>Your Tasks is Empty</span>

    const onClickFilterHandler = (nextFilterValue:FilterValueType) => {
      return (
          changeFilter(nextFilterValue)
      )
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
                <button onClick={()=>onClickFilterHandler('all')}>All</button>
                <button onClick={()=>onClickFilterHandler('active')}>Active</button>
                <button onClick={()=>onClickFilterHandler('completed')}>Completed</button>
            </div>
        </div>
    );
};

