# NOC System - Documentation

## Network Operations Center with Node.js + TypeScript

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

**Clone the template:**

```bash
# Linux/macOS
cp .env.template .env

# Windows
copy .env.template .env
```

**Configure `.env`:**

```env
PORT=3000
PROD=false

MAILER_EMAIL=your-email@gmail.com
MAILER_SECRET_KEY=your-app-password
```

### 3. Run the Application

```bash
# Development mode (auto-reload)
npm run dev

# Production mode (compile + run)
npm start

# Build only
npm run build
```

---

## 📋 Environment Variables

| Variable            | Type    | Description              | Example               |
| ------------------- | ------- | ------------------------ | --------------------- |
| `PORT`              | number  | Application port         | `3000`                |
| `PROD`              | boolean | Production mode flag     | `false` / `true`      |
| `MAILER_EMAIL`      | string  | Sender email address     | `noc@company.com`     |
| `MAILER_SECRET_KEY` | string  | Email authentication key | `xxxx xxxx xxxx xxxx` |

---

## 🎯 Available Scripts

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Development with auto-reload and console clearing  |
| `npm run build` | Compile TypeScript to JavaScript (output: `dist/`) |
| `npm start`     | Build and run in production mode                   |

---

**Last updated:** October **2025**# NOC System - Documentation
