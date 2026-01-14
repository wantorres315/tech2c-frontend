# Tech2C Frontend (Docker)

Frontend application for the Tech2C platform. It provides a dashboard to visualize CO₂ emissions and energy consumption indicators processed by the Laravel backend.

This project was developed for the **Tech2C Junior / Mid Fullstack Engineer Challenge**.

⚠️ Language Note  
Although this README is written in English, the application UI is in **Portuguese** because the original DGEG Excel file is in Portuguese. Sector names such as *Energia, Transportes, Indústria, Agricultura, Serviços* are preserved exactly to ensure data consistency between Excel, backend, and frontend.

---

## 🛠️ Tech Stack

- React
- Vite
- TailwindCSS
- Recharts
- Axios
- Docker
- Nginx

---

## 🐳 Running with Docker

The frontend is fully dockerized and served using Nginx.

Inside the frontend directory:

```bash
docker compose build
docker compose up -d
