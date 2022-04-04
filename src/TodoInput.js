import Input from "./components/Input"

export default function TodoInput({value, changeInput, addTask}) {
    return (
        <form onSubmit={addTask}>
            <Input value={value} changeInput={changeInput}/>
            <button>Add Task</button>
        </form>
    )
}