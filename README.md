# Task Management App - Frontend

## Overview

This is the frontend client for the Task Management App. It is built using React and Next.js and communicates with the backend API to manage tasks. The frontend supports pagination, task creation with validation, task detail view, status toggling, and real-time updates via Socket.IO.

---

## Link
Live Link: https://task-management-client-gray.vercel.app/
api link: https://task-management-server-production-faae.up.railway.app/


## Features

- Paginated task list (5 tasks per page)
- Create task form with basic validation (title, description, due date)
- View detailed task information
- Toggle task status between "Completed" and "Pending"
- Real-time updates using Socket.IO for syncing tasks across multiple tabs/windows
- Promise-based API calls using async/await

---

## Tech Stack

- React.js with Next.js framework
- Socket.IO client for real-time communication
- Axios or Fetch API for HTTP requests
- Tailwind CSS or any other CSS framework (optional)
- Environment variables for configuration

---

