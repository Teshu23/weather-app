# 🌤️ Modern React Weather App

A clean, responsive **Weather App** built using **React**, **Tailwind CSS**, and the **OpenWeatherMap API**.  
It provides real-time weather details and a 5-day forecast for any city — designed with a beautiful, modern UI.

---

## 🚀 Features

- 🌍 Search weather by city name  
- 🌡️ Real-time temperature, humidity, and wind speed  
- 📅 5-Day forecast view  
- 🌈 Dynamic gradient backgrounds  
- 📱 Fully responsive for all devices  
- ⚡ Built with React functional components and hooks  
- ☁️ Data powered by the OpenWeatherMap API  
- 💫 Smooth loading animation  

---

## 🧠 Tech Stack

- **Frontend:** React  
- **Styling:** Tailwind CSS  
- **API:** [OpenWeatherMap](https://openweathermap.org/api)  
- **Hosting:** [Vercel](https://weather-app-gamma-five-69.vercel.app/)

---

## 🖼️ Screenshots

### 🏠 Home Screen
![Weather App - Home](./Weather-App_1.png)

### 🌦️ Forecast Display
![Weather App - Forecast](./Weather-App_2.png)

---

## ⚙️ Installation & Setup

Follow these simple steps to run the app locally 👇

### 1️⃣ Clone this repository
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add your API key

Create a `.env.local` file in the project root and paste your OpenWeatherMap API key:

```bash
WEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Run the app

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
```

---

## 📁 Folder Structure

```
weather-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Loading.jsx
│   │   ├── WeatherCurrent.jsx
│   │   ├── WeatherForecast.jsx
│   │   └── WeatherForm.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── Weather-App_1.png
├── Weather-App_2.png
└── README.md
```

---

## 🧾 API Reference

The app uses the **[OpenWeatherMap API](https://openweathermap.org/api)** endpoints:

* `/weather` → Current weather data
* `/forecast` → 5-day forecast

You can register for a free API key at [https://openweathermap.org](https://openweathermap.org).

---

## 🛠️ Customization

You can easily customize:

* 🌈 Colors and gradient backgrounds in `App.css`
* 🌡️ Temperature unit (°C or °F)
* 🌆 Default city or theme

---

## 🌐 Live Demo

🔗 [https://yourweatherapp.vercel.app](https://yourweatherapp.vercel.app)

---

## 👩‍💻 Author

**Teshumala Kalihari**
💻 Frontend Developer | React Enthusiast
🐙 [GitHub](https://github.com/Teshu23)


---

⭐ *If you like this project, please give it a star on GitHub!*

---


