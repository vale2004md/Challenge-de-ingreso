🧠 Challenge de Ingreso — Software Factory
Este proyecto fue desarrollado como parte del Challenge de Ingreso para la Software Factory.
Consiste en una aplicación Full Stack que permite crear, editar y eliminar tareas mediante una interfaz amigable en React y un servidor en Node.js con Express.

📋 Tabla de Contenidos

Cómo ejecutar la aplicación
Estructura del proyecto
Tecnologías utilizadas
Funcionalidades principales
Screenshots
Posibles mejoras
Autor


🚀 Cómo ejecutar la aplicación localmente
1️⃣ Clonar el repositorio
bashgit clone https://github.com/vale2004/Challenge-de-ingreso.git
cd Challenge-de-ingreso
2️⃣ Configurar variables de entorno
Antes de ejecutar, crea los archivos .env como se indica:
📦 Backend (/backend/.env)
envPORT=5000
💻 Frontend (/frontend/.env)
envVITE_API_URL=http://localhost:5000

⚠️ Importante: No subir los archivos .env al repositorio. El .gitignore ya los excluye automáticamente.

3️⃣ Instalar dependencias y ejecutar el backend

bashcd backend
npm install
npm run dev
El servidor se ejecutará en: http://localhost:5000

4️⃣ Instalar dependencias y ejecutar el frontend

En otra terminal:

bashcd frontend
npm install
npm run dev
La aplicación se ejecutará en: http://localhost:5173

🧩 Estructura del proyecto

challenge-de-ingreso/
├── backend/
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── .env (no incluido)
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── .env (no incluido)
├── README.md
├── .gitignore
└── package.json

🧰 Tecnologías utilizadas

🔹 Frontend
React con Vite
Hooks: useState, useEffect
Tailwind CSS
Comunicación con API mediante fetch

🔹 Backend
Node.js
Express
CORS
REST API para CRUD de tareas (GET, POST, PUT, DELETE)
Almacenamiento en memoria (array temporal)


✨ Funcionalidades principales
✅ Crear nuevas tareas
✅ Editar tareas existentes
✅ Eliminar tareas
✅ Contador de tareas
✅ Diseño moderno y responsive

⚠️ Nota: Las tareas se almacenan en memoria (array temporal en el servidor) según los requisitos del challenge.

Al recargar la página: Las tareas persisten mientras el servidor esté activo
Al reiniciar el servidor: Las tareas se pierden (comportamiento esperado)

## 📸 Screenshots

### 🏠 Pantalla principal
![Pantalla principal](./screenshots/homePage.png)

### ➕ Editar tarea
![Editar tarea](./screenshots/editTarea.png)

💡 Posibles mejoras (bonus)

🔸 Persistencia con SQLite o JSON
🔸 Filtros por tareas completadas
🔸 Validación de campos
🔸 Modo oscuro
🔸 Tests unitarios y de integración
🔸 Autenticación de usuarios


👩‍💻 Autor
Valeria Medina
📅 Entregado para el Challenge de Ingreso — Software Factory

📄 Licencia
Este proyecto fue desarrollado con fines educativos como parte de un challenge de ingreso.
