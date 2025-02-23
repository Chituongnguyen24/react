import React, { useState } from "react";
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

const Mycomponent = () => {
    const [listUser, setListUser] = useState([
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 34 },
        { id: 3, Name: "Chien", Age: 32 },
    ]);
    const [hiddenUsers, setHiddenUsers] = useState([]);

    const handleAddnewUser = (userObject) => {
        if (listUser.length >= 10) {
            alert("Chỉ có thể thêm tối  đa 10 User");
            return;
        }
        setListUser([userObject, ...listUser]);
    };

    const handleDeleteUser = (userId) => {
        const userToHide = listUser.find(user => user.id === userId);
        setHiddenUsers([...hiddenUsers, userToHide]);
        const updatedList = listUser.filter(user => user.id !== userId);
        setListUser(updatedList);
    };

    const handleRestoreUsers = () => {
        setListUser([...listUser, ...hiddenUsers]);
        setHiddenUsers([]);
    };

    const handleDeleteAllUsers = () => {
        setHiddenUsers([...hiddenUsers, ...listUser]);
        setListUser([]);
    };

    return (
        <div>
            <AddUserInfor handleAddnewUser={handleAddnewUser} />
            <hr />
            <DisplayInfor
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
                handleRestoreUsers={handleRestoreUsers}
                handleDeleteAllUsers={handleDeleteAllUsers}
            />
        </div>
    );
};

export default Mycomponent;