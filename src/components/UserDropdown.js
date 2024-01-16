import React from 'react';

const UserDropdown = ({ inputValue, users, onItemClick }) => {
  return (
    inputValue !== '' && (
      <ul className="bg-white border border-gray-300 rounded mt-10 ml-72 shadow-md w-3/5 text-black">
        {users
          .filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase()))
          .map(user => (
            <li
              key={user.id}
              onClick={() => onItemClick(user)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {user.name}
            </li>
          ))}
      </ul>
    )
  );
}

export default UserDropdown;
