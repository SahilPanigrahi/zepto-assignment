import React from 'react';

const UserChips = ({ selectedUsers, onChipRemove }) => {
  return (
    <div className="flex flex-wrap border-none">
      {selectedUsers.map(user => (
        <div key={user.id} className="flex items-center bg-blue-500 text-white p-2 rounded m-1">
          <img src={`https://via.placeholder.com/30x30`} alt={user.name} className="rounded-full mr-2" />
          {user.name}
          <span onClick={() => onChipRemove(user)} className="ml-2 cursor-pointer">×</span>
        </div>
      ))}
    </div>
  );
}

export default UserChips;



