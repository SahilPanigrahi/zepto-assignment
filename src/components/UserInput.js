import React from 'react';
import UserChips from './UserChips';

const UserInput = ({ value, onChange, onKeyDown, selectedUsers, onChipRemove }) => {
  return (
    <div className="flex mt-2 flex-wrap bg-white text-black border border-slate-800 rounded">
      <UserChips selectedUsers={selectedUsers} onChipRemove={onChipRemove} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Type to search..."
        className="py-2 px-4 border border-gray-300 rounded focus:outline-none"
      />
    </div>
  );
}

export default UserInput;

