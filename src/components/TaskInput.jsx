import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      addTask(trimmed);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow px-4 py-2 rounded-xl  dark:bg-[#334155]  dark:text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
