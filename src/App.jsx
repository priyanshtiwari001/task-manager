
import React, { useContext, useEffect } from 'react';
import { TaskProvider, TaskContext } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import ThemeToggle from './components/ThemeToggle';
import './index.css';
import {motion} from 'framer-motion'
const AppContent = () => {
  const { theme } = useContext(TaskContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
   <div className="flex h-screen overflow-hidden dark:text-white dark:bg-[#0f172a] bg-white ">
      {/* Sidebar */}
      <aside className="w-64 dark:bg-[#1e293b] flex flex-col justify-between px-6 py-8">
        <div>
          <h2 className="text-2xl font-bold mb-8">🧠 TaskFlow</h2>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Filters</h3>
            <TaskFilter />
          </div>
        </div>
        <ThemeToggle />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Task Manager App</h1>
        </header>

        {/* Task List */}
        <section className="flex-1 overflow-y-auto px-8 py-6 dark:bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
          <TaskList />
        </section>

        {/* Sticky Input Bar */}
        <footer className="absolute bottom-0 left-0 w-full px-8 py-4 bg-white dark:bg-[#1e293b] border-t border-gray-700">
          <TaskInput />
        </footer>
      </main>
    </div>


  );
};

const App = () => (
  <TaskProvider>
    <AppContent />
  </TaskProvider>
);

export default App;
