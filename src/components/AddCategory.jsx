import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') return;
        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
}
