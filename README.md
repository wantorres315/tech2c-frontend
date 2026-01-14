# Tech2C Frontend

Frontend application for the Tech2C platform, responsible for displaying CO₂ emissions and energy consumption indicators extracted from Excel files processed by the Laravel backend.

This project was developed for the **Tech2C Junior / Mid Fullstack Engineer Challenge**.

⚠️ **Note:**  
Although this README is written in English, the application interface is in **Portuguese**, because the original DGEG Excel file and its data structure are in Portuguese. The terminology (e.g., *Energia*, *Transportes*, *Indústria*, etc.) follows exactly what exists in the source file.

---

## 🚀 Features

- Upload Excel files (`.xlsx`)
- Automatically loads existing data from the backend when the page is refreshed
- Main indicators:
  - Average energy consumption
  - Total CO₂ emissions of the latest year
  - Number of processed years
- Charts:
  - CO₂ evolution per year (line chart)
  - Top 5 companies with highest emissions (bar chart)
  - CO₂ emissions by sector per year (pie charts)
- Fully responsive dashboard
- Input file is automatically cleared after upload
- Real-time refresh of data after importing a new file

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

## 📦 Local Installation (without Docker)

```bash
npm install
npm run dev
