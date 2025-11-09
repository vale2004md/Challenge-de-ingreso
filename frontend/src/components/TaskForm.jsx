import { useState } from 'react';

export default function TaskForm({ onSubmit, initialValue = '', buttonText = 'Agregar' }) {
    const [title, setTitle] = useState(initialValue);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Por favor ingresa una tarea');
            return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit(title);
            setTitle('');
        } catch (error) {
            alert('Error al procesar la tarea');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Escribe una nueva tarea..."
                className="flex-1 px-5 py-4 text-base border-2 border-gray-200 rounded-xl 
                   focus:outline-none focus:border-indigo-500 focus:ring-4 
                   focus:ring-indigo-100 transition-all disabled:bg-gray-100 
                   disabled:cursor-not-allowed"
                disabled={isSubmitting}
            />
            <button
                type="submit"
                className="px-6 py-4 bg-indigo-500 text-white rounded-xl font-semibold 
                   text-base hover:bg-indigo-600 hover:-translate-y-0.5 
                   hover:shadow-lg hover:shadow-indigo-200 transition-all 
                   whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed 
                   disabled:transform-none"
                disabled={isSubmitting}
            >
                {isSubmitting ? '⏳' : '➕'} {buttonText}
            </button>
        </form>
    );
}