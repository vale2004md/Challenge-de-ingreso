const express = require('express');


// array en memoria para almacenar las tareas
const tasks = [];

// GET, POST, PUT, DELETE
const getTasks = (req, res) => { 
    res.json(tasks) 
};

//Crear tarea
const createTask = (req, res) => {
    const newTask = {
       id: tasks.length + 1,
        title: req.body.title,
        completed: false, 
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};


//Actualizar tarea
const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
};

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index === -1) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

    tasks.splice(index, 1);
    res.status(204).send();
};

module.exports = { 
    getTasks, 
    createTask, 
    updateTask, 
    deleteTask 
};