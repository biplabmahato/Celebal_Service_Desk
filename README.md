# 🛠️ Service Desk Application

A web-based Service Desk platform allowing users to register, log in, and raise support tickets for various issues. Admins can manage tickets by assigning, tracking, and resolving them. Built with a focus on responsive UI, seamless UX, and real-time updates.

---

## 🚀 Features

### 👥 User Side
- User registration and login
- Raise new support tickets (issue type, priority, description)
- Track ticket status: Open, In Progress, Resolved
- Receive updates/notifications

### 🛠️ Admin Side
- View all raised tickets
- Assign tickets to support staff
- Update ticket status
- Manage ticket categories and priorities

---

## 🧱 Tech Stack

### 🔹 Frontend
- React.js
- Axios
- Tailwind CSS / Bootstrap (choose based on your UI)
- React Router

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt for password hashing

---

## 📁 Folder Structure
service-desk-app/
├── # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── ...
├── Backend/ # Node.js Backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── server.js
│ └── ...




Setup Backend:
bash Copy Edit
cd Backend
npm install
node server.js

Setup Frontend:
npm install
npm run dev 
