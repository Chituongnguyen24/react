import React, { useState } from 'react';

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        const { name, value } = event.target;
        if (name === 'Name') {
            setName(value);
        } else if (name === 'Age') {
            setAge(value);
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: name,
            Age: age
        });
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Name:</label>
            <br />
            <input
                type="text"
                name="Name"
                value={name}
                onChange={handleOnChangeInput}
            />
            <br />
            <label>Age:</label>
            <br />
            <input
                type="text"
                name="Age"
                value={age}
                onChange={handleOnChangeInput}
            />
            <br />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUserInfor;