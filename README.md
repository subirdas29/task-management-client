# Task Management App - Frontend

## Overview

This is the frontend client for the Task Management App. It is built using **React** with **Next.js** and communicates with the backend API to manage tasks. The frontend provides a clean interface for task creation, status toggling, detail viewing, and real-time updates via Socket.IO. It includes basic form validation, pagination, and responsive design using Tailwind CSS.

---

## Live Links

- **Client (Frontend):** https://task-management-client-gray.vercel.app/
- **API (Backend):** https://task-management-server-production-faae.up.railway.app/

---

## Features

- ✅ Paginated task list (5 tasks per page)
- 📝 Task creation with form validation (title, description, due date)
- 📄 View task details
- 🔁 Toggle task status between "Completed" and "Pending"
- 🌐 Real-time task updates via Socket.IO (across tabs/windows)
- 🚀 Uses Zod + React Hook Form for schema validation
- 🔧 Organized folder structure with modular components
- ⚙️ Environment-based configuration support

---

## Tech Stack

- **Next.js 15**
- **React 19**
- **Tailwind CSS**
- **Socket.IO (client)** – Real-time sync
- **React Hook Form** 
- **Day.js** – Date formatting
- **Lucide React Icons**
- **Radix UI** – For accessible components
- **TanStack Table** – For future scalable tables
- **Sonner** – Lightweight toast notifications

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd task-management-client

2. **Install backend dependencies:**
    ``` 
    npm install

3. **Create a .env file in the backend folder and add the following environment variables:**
    ``` 
    NEXT_PUBLIC_BASE_API=https://task-management-server-production-faae.up.railway.app/api
    NEXT_PUBLIC_SOCKET_URL=https://task-management-server-production-faae.up.railway.app
