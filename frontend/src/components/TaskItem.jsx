import { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function TaskItem({ task, onTaskUpdate, onTaskDelete }) {
  const [isCompleting, setIsCompleting] = useState(false);
  const navigate = useNavigate();

  const handleToggleComplete = async () => {
    setIsCompleting(true);
    try {
      const updatedTask = await updateTask(task.id, {
        completed: !task.completed,
      });
      onTaskUpdate(updatedTask);
    } catch (error) {
      alert('Error al actualizar la tarea');
    } finally {
      setIsCompleting(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      try {
        await deleteTask(task.id);
        onTaskDelete(task.id);
      } catch (error) {
        alert('Error al eliminar la tarea');
      }
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${task.id}`, { state: { task } });
  };

  return (
    <div className={`flex items-center gap-4 p-5 rounded-xl transition-all 
                     border-2 border-transparent hover:border-indigo-500 
                     hover:translate-x-1 ${
                       task.completed 
                         ? 'bg-green-50 opacity-70' 
                         : 'bg-gray-50 hover:bg-gray-100'
                     }`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
        disabled={isCompleting}
        className="w-6 h-6 cursor-pointer accent-indigo-500 rounded"
      />
      <span className={`flex-1 text-lg break-words ${
        task.completed ? 'line-through text-gray-400' : 'text-gray-800'
      }`}>
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg 
                     font-medium text-sm hover:bg-yellow-500 
                     hover:-translate-y-0.5 transition-all"
        >
          ✏️ Editar
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg 
                     font-medium text-sm hover:bg-red-600 
                     hover:-translate-y-0.5 transition-all"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}