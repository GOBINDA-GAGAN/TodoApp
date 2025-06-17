# 📝 Todo App

Welcome to the **Todo App** – your simple and powerful task manager!  
Manage your daily tasks efficiently with CRUD operations and status tracking.

---

## 🚀 Features

- ✅ Create new tasks
- 📝 Update task title, description, or status
- ❌ Delete tasks
- 📋 View all tasks
- 🔁 Task statuses: `Pending`, `Running`, `Completed`, `Failed`
- 🕒 Auto-generated `createdAt` and `updatedAt` timestamps

---

## 💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- *(Optional Frontend: React, Vue, etc.)*

---
## 📸 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/home.png)

### ➕ Create Task
![Create Task](./screenshots/create.png)

### ✏️ Update Task
![Update Task](./screenshots/update.png)

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/todo-app.git
cd todo-app

# 2. Install dependencies
npm install

# 3. Configure environment
# Create a .env file and add your MongoDB URI
MONGO_URI=mongodb://localhost:27017/todo-app

# 4. Start the server
npm run dev
