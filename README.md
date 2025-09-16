# 🌊 Ocean Hazard Monitoring App

## 🚀 Project Overview

The **Ocean Hazard Monitoring App** is an integrated platform for crowdsourced ocean hazard reporting and social media analytics.  
This web application enables citizens, volunteers, and disaster management authorities to report geotagged natural calamities in real time, monitor social media trends, and visualize hazards on an interactive map. It helps improve situational awareness and aid decision-making during ocean-related emergencies.

---

## ✅ Features

- 📝 Submit geotagged natural calamity reports with description and image  
- 🌍 Interactive map visualization of submitted reports and social media posts  
- ⚡ Real-time social media scraping (X, Instagram) to track hazard-related trends  
- 🚨 Automatic threshold-based alert triggering for emergency departments  
- 🏥 Aid status validation dashboard for administrative users  
- Multilingual support (optional)  
- Offline data collection capability (future extension)  

---

## 🏗️ Folder Structure

```plaintext
ocean-hazard-project/
├── backend/
│   ├── index.js
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   └── utils/
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   └── App.js
    └── package.json
```

---

## ⚙️ Tech Stack

- Frontend:
    - React  
    - Axios  
    - React Leaflet (for maps)  

- Backend:
    - Node.js  
    - Express.js  
    - PostgreSQL  

- Social Media Data:
    - X (Twitter), Instagram (via scraping)  

---

## ✅ Setup Instructions

### 1️⃣ Backend Setup

```bash
cd ocean-hazard-project/backend
npm install
node index.js
```

Ensure PostgreSQL is installed and configured.  
Create database `ocean_hazard_db` and tables as described in the project documentation.

---

### 2️⃣ Frontend Setup

```bash
cd ocean-hazard-project/frontend
npm install
npm start
```

<!-- App will be available at:  
[http://localhost:3000](http://localhost:3000) -->

---

## 🔮 Future Extensions

- Implement full multilingual support  
- Add offline report sync capability  
- Add push notifications  
- Deploy on cloud (Heroku / Vercel)  

---

## ⚠️ Notes

- Ensure backend runs on port `5000` by default  
- Frontend assumes backend APIs:
    - `/api/reports/submit`  
    - `/api/reports`  
    - `/api/social-posts`  
    - `/api/alerts`  
    - `/api/aid`  

---

## 📄 License

MIT License  
© 2025 Ocean Hazard Project Contributors  

---

## 👥 Contributors

- Punya R  
- R Srivatsan 
- Saksham Pratap Singh
- Shivani Kumari
- Akshit
- Cris Thomas

---

## 🎯 Acknowledgements

- INCOIS: Indian National Centre for Ocean Information Services  
- OpenStreetMap & Leaflet for maps  
- Axios for HTTP requests  

---

🌊 Stay safe and help protect our coasts! 🌊
