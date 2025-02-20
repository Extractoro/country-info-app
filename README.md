# Country Info App

Country Info App provides information about countries, including data on neighboring countries. The application consists of two parts: the frontend (React) and the backend (NestJS).

## Table of Contents

1. [Installation Instructions](#1-installation-instructions)
2. [Running the Application](#2-running-the-application)
3. [Environment Variables](#3-environment-variables)

---

## 1. Installation Instructions

### 1.1 Install Dependencies in the Root Project

First, clone the repository and navigate to the project directory. Then, run the following command to install dependencies in the root directory:

```bash
npm install
```

### 1.2 Install Backend Dependencies

Navigate to the backend directory and install the required dependencies:

```bash
cd backend
npm install
```

### 1.3 Install Frontend Dependencies

Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

## 2. Running the Application
### 2.1 Run Both Backend and Frontend Simultaneously

You can run both the backend and frontend simultaneously using the following command from the root directory:

```bash
npm run dev
```

This will use concurrently to run both the backend and frontend. The backend will run on http://localhost:4343, and the frontend will run on http://localhost:5173 by default.

### 2.2 Run Frontend Separately

If you need to run the frontend separately, use this command from the frontend directory:

```bash
npm run dev
```

This will start the frontend application on http://localhost:5173 by default.

### 2.3 Run Backend Separately

To run the backend separately, navigate to the backend directory and use this command:

```bash
npm run start:dev
```

This will start the backend application in development mode (with automatic restarts on changes).

## 3. Environment Variables

The necessary environment variables are included in the .env files located in both the backend and frontend directories

### 3.1 Backend Environment Variables

The .env file is located in the backend directory. It contains the necessary environment variables for the backend:

```bash
PORT=4343
DATE_NAGER_URL='https://date.nager.at/api/v3'
COUNTRIESNOW_URL='https://countriesnow.space/api/v0.1'
ORIGIN_CORS='http://localhost:5173'
```

### 3.2 Frontend Environment Variables

The .env file is also located in the frontend directory for the frontend-specific environment variables:

```bash
VITE_API_URL='http://localhost:4343'
```