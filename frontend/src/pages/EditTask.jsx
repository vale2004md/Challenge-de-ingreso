import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { updateTask } from '../services/api';

export default function EditTask() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const task = location.state?.task;

  if (!task) {
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center text-xl text-red-500 mb-6">
            ❌ Tarea no encontrada
          </div>
          <button 
            onClick={() => navigate('/')}
            className="block mx-auto px-6 py-3 bg-indigo-500 text-white 
                       rounded-xl font-medium hover:bg-indigo-600 
                       transition-all"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleUpdateTask = async (title) => {
    await updateTask(task.id, { title, completed: task.completed });
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              ✏️ Editar Tarea
            </h1>
            <button 
              onClick={() => navigate('/')}
              className="px-5 py-2.5 bg-indigo-500 text-white rounded-xl 
                         font-medium hover:bg-indigo-600 hover:-translate-y-0.5 
                         transition-all"
            >
              ← Volver
            </button>
          </div>
        </header>

        <div className="mt-6">
          <TaskForm
            onSubmit={handleUpdateTask}
            initialValue={task.title}
            buttonText="Guardar cambios"
          />
        </div>
      </div>
    </div>
  );
}