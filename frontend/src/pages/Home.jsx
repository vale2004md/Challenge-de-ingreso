import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { getTasks, createTask } from '../services/api';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (title) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks(tasks.map((task) => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center text-xl text-gray-600">
            ⏳ Cargando tareas...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center text-xl text-red-500 mb-6">
            ❌ {error}
          </div>
          <button 
            onClick={loadTasks}
            className="block mx-auto px-6 py-3 bg-indigo-500 text-white 
                       rounded-xl font-medium hover:bg-indigo-600 
                       transition-all"
          >
            🔄 Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            📋 Lista de Tareas
          </h1>
          <p className="text-gray-500 text-lg">
            {tasks.length} {tasks.length === 1 ? 'tarea' : 'tareas'} en total
          </p>
        </header>

        <TaskForm onSubmit={handleCreateTask} />

        <TaskList
          tasks={tasks}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />
      </div>
    </div>
  );
}