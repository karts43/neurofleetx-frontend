# NeuroFleetX – AI Urban Mobility Platform 🚦🚗

NeuroFleetX is an **AI-powered urban fleet and traffic intelligence system** designed to optimize smart city mobility.  
It provides **role-based dashboards**, **fleet monitoring**, and a scalable foundation for real-time traffic and vehicle analytics.

---

## 🔥 Key Features

- 🔐 **Authentication & Role-Based Access**
  - Admin
  - Fleet Manager
  - Driver
  - Customer

- 📊 **Role-Based Dashboards (UI)**
  - Admin: Total Users, Total Fleet, Active Vehicles
  - Fleet Manager: Fleet Status, Vehicles in Use
  - Driver: Assigned Vehicle, Trip Status
  - Customer: My Bookings, Available Vehicles

- 🧭 **Smart Navigation Ready**
  - Architecture supports real-time tracking & route optimization

- 🧩 **Scalable Architecture**
  - Frontend: React
  - Backend (planned): Spring Boot + JWT
  - Database (planned): MySQL

---

## 🛠️ Tech Stack

### Frontend
- React (Create React App)
- React Router
- JavaScript (ES6+)
- CSS (Custom UI)

### Backend (Planned)
- Spring Boot
- Spring Security + JWT
- REST APIs

---

## 📁 Project Structure

```text
neurofleetx-frontend/
│
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │
│   ├── dashboards/
│   │   ├── AdminDashboard.jsx
│   │   ├── ManagerDashboard.jsx
│   │   ├── DriverDashboard.jsx
│   │   ├── CustomerDashboard.jsx
│   │
│   ├── services/
│   │   └── authService.js
│   │
│   ├── App.js
│   ├── index.js
│
├── public/
├── package.json
└── README.md

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/karts43/neurofleetx-frontend.git
cd neurofleetx-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm start

📍 Open: http://localhost:3000

3000

🧪 Available Scripts
Command	Description
npm start	Run app in development mode
npm test	Run tests
npm run build	Build for production
npm run eject	Eject CRA config (not recommended)
🎯 Current Status

✅ Frontend UI complete

✅ Role-based routing implemented

⏳ Backend & JWT authentication in progress

🌍 Future Enhancements

Real-time vehicle tracking (WebSocket)

AI-based route optimization

Live traffic & congestion analytics

Booking & scheduling engine

Admin analytics dashboard
