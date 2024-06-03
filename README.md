# Climacast

Climacast is a web application designed to fetch and display weather details of a specified location. The app provides comprehensive weather information, including:

- Elevation
- Feels Like Temperature
- Humidity
- Air Pressure
- Sunrise and Sunset Times
- Visibility
- Wind Speed

The project is divided into two parts: frontend and backend. The frontend is built using React.js with Vite.js for a fast development experience, while the backend handles data fetching and processing.

## Features

- **Location-based Weather Details**: Get current weather information for any location.
- **Additional Weather Metrics**: Elevation, feels like temperature, humidity, air pressure, sunrise and sunset times, visibility, and wind speed.
- **Seamless Integration**: Frontend and backend work together to provide a smooth user experience.

## Project Structure

- **Frontend**: Built with React.js and Vite.js.
- **Backend**: Handles API requests and serves weather data.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Git installed on your machine.

### Setup

#### Clone the repository

```sh
git clone https://github.com/yourusername/climacast.git
cd climacast
```
### Backend Setup

#### 1. Navigate to the backend directory:

```sh
cd server
```

#### 2. Install dependencies:

```sh
npm install
```

#### 3. Setup .env file:

```makefile
APP_ID=YOUR_APP_ID
APP_KEY=YOUR_APP_KEY
APP_PASS=YOUR_APP_PASS
SECRET=YOUR_SECRET
```

#### 4. Start the backend server:

```sh
nodemon app.js
```

### Frontend Setup

#### 1. Navigate to the frontend directory:

```sh
cd ../frontend
```

#### 2. Install dependencies:

```sh
npm install
```

#### 3. Start the frontend server:

```sh
npm run dev
```

#### 4. Open the frontend server link to run the application

## Usage

To use Climacast, follow these steps:

1. Enter the location for which you want to fetch weather details.
2. View the weather information displayed on the dashboard.

## Technologies Used

Climacast is built using the following technologies:

- **Frontend**:
  - React.js: A JavaScript library for building user interfaces.
  - Vite.js: A next-generation frontend build tool that sets up quickly and offers instant server start.
  - Axios: A promise-based HTTP client for making requests to fetch weather data.

- **Backend**:
  - Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - Axios: Also used on the backend for making requests to external APIs.

- **API**:
  - OpenWeatherMap: An external weather API used to fetch weather data based on location coordinates.

