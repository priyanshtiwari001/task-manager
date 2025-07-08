import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { CheckCircle, Circle, ListChecks } from 'lucide-react';

const TaskFilter = () => {
  const { filter, setFilter } = useContext(TaskContext);

  const filters = [
    { key: 'all', label: 'All Tasks', icon: ListChecks },
    { key: 'pending', label: 'Pending', icon: Circle },
    { key: 'completed', label: 'Completed', icon: CheckCircle },
  ];

  return (
    <ul className="space-y-2 mt-4">
      {filters.map(({ key, label, icon: Icon }) => (
        <li key={key}>
          <button
            onClick={() => setFilter(key)}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all
              ${
                filter === key
                  ? 'bg-blue-600 text-white'
                  : 'dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-700'
              }`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskFilter;
