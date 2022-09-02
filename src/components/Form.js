import React, {useState} from "react";

function Form(props){
    const [nameInput, setNameInput] = useState('')

    function handleChange(event) {
        setNameInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        nameInput === "" ? alert('Задача не может быть пустой') : props.addTask(nameInput);
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
            </label>
        </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={nameInput}
            onChange={handleChange}
        />
            <button type="submit" className="btn btn__primary btn__lg" >
                Add
            </button>
        </form>
    )
}

export default Form; 
