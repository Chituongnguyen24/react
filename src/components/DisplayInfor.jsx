import React from 'react';

const DisplayInfor = ({ listUser, handleDeleteUser, handleRestoreUsers, handleDeleteAllUsers }) => {
    console.log(listUser);

    if (!listUser || !Array.isArray(listUser)) {
        return <div>No user information available.</div>;
    }

    return (
        <div>
            {listUser.map((user) => (
                <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                    <div>User name is: {user.Name}</div>
                    <div>User Age: {user.Age}</div>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    <hr />
                </div>
            ))}
            <button onClick={handleRestoreUsers}>Restore Users</button>
            <button onClick={handleDeleteAllUsers}>Delete All</button>
        </div>
    );
};

export default DisplayInfor;