
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onTaskUpdate, onTaskDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 text-xl">
        <p>📝 No hay tareas aún. ¡Crea tu primera tarea!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
}