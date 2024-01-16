// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInput from "./components/UserInput";
import UserDropdown from "./components/UserDropdown";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setUsers(users.filter((u) => u.id !== user.id));
    setInputValue("");
  };

  const handleChipRemove = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    setUsers([...users, user]);
  };

  const handleBackspace = () => {
    if (inputValue === '' && selectedUsers.length > 0) {
      const lastSelectedUser = selectedUsers[selectedUsers.length - 1];
      handleChipRemove(lastSelectedUser);
    }
  };

  
  return (
    <div className="App p-4 w-screen h-screen bg-slate-800 text-white flex justify-center">
      <div className="content">
        <div className="tagInput">
          <UserInput
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Backspace') {
                handleBackspace();
              }
            }}
            selectedUsers={selectedUsers}
            onChipRemove={handleChipRemove}
          />
          <div className="absolute top-10 left-0 right-0 mt-1">
            <UserDropdown
              inputValue={inputValue}
              users={users}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
