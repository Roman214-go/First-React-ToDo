import React from "react";
import TodoInput from "./TodoInput";
import Task from "./Task"

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            complete: false,
            taskList: [{
                id: 1,
                title: 'Clean my room',
                isChecked: false
            },
            {
                id: 2,
                title: 'Do homework',
                isChecked: true
            },
            {   
                id: 3,
                title: 'Go for a walk',
                isChecked: false
            }],
        }
    }

    changeInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addTask = (e) => {
        e.preventDefault()
        
        if (this.state.inputValue.length && this.state.inputValue.length < 50) {
            
        const taskTemplate = {
            id: Math.random(),
            title: this.state.inputValue,
            isChecked: false
        }
        this.setState({
            taskList: [...this.state.taskList, taskTemplate],
            inputValue: ''
        })
    }
        else {
            this.setState({
                inputValue: ''
            })
        }
    }

    deleteTask = (id) => {
        this.setState({
            taskList: this.state.taskList.filter(item => item.id != id)
        })
    }
    
    completeTask = (id) => {
        this.setState({
            taskList: this.state.taskList.map(item => (item.id == id) ? (item.isChecked = !item.isChecked, item) : (item))
        })
        
    }
    

    render() {
        const {taskList} = this.state
        const {inputValue} = this.state
        return (
            <div className="todo-container">
                <div className="todo-app">
                <h1>Todo App</h1>
                <TodoInput value={inputValue} changeInput={this.changeInput} addTask={this.addTask}/>
                    <div className="todo-list">
                    <Task taskList={taskList} deleteTask={this.deleteTask} completeTask={this.completeTask}/>
                    </div>
                </div>
            </div>
        )
    }
}