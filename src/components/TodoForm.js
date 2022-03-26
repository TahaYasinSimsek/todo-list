import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Todo Güncelleyiniz..."
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit '>Güncelleyiniz</button>
                </>) : (<> <input
                    type="text"
                    placeholder="Todo Giriniz..."
                    value={input}
                    name="text"
                    className="todo-input hov"
                    onChange={handleChange}
                    ref={inputRef}
                />
                    <button className='todo-button'>Todo Giriniz...</button>
                </>
            )}

        </form>
    );
}

export default TodoForm;