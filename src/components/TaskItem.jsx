import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { CheckCircle, Circle, Edit, Trash2 } from 'lucide-react';

const TaskItem = React.memo(({ task }) => {
  const { deleteTask, toggleComplete, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      editTask(task.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all border border-gray-700 overflow-auto dark:bg-[#1e293b] ${
        task.completed ? 'opacity-70 line-through text-gray-400' : 'dark:text-white'
      }`}
    >
      <div className="flex items-center gap-3 flex-grow">
        <button
          onClick={() => toggleComplete(task.id)}
          className="text-blue-500 hover:text-blue-400"
        >
          {task.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
        </button>

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            onBlur={handleEdit}
            autoFocus
            className="bg-transparent border-b border-gray-500 focus:outline-none text-sm flex-grow"
          />
        ) : (
          <span className="text-sm">{task.text}</span>
        )}
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button onClick={handleEdit} className="text-yellow-400 hover:text-yellow-300">
          <Edit size={18} />
        </button>
        <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-300">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
});

export default TaskItem;
