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

MAILER_SERVICE=gmail
MAILER_EMAIL=your-email@gmail.com
MAILER_SECRET_KEY=your-app-password

MONGO_URL=mongodb://admin:pass@localhost:27017/?authMechanism=DEFAULT
MONGO_DB_NAME=NOC
MONGO_USER=admin
MONGO_PASS=pass

POSTGRES_URL=localhost:5432
POSTGRES_USER=postgres
POSTGRES_DB=NOC
POSTGRES_PASSWORD=pass
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

| Variable            | Type    | Description               | Example                                                       |
| ------------------- | ------- | ------------------------- | ------------------------------------------------------------- |
| `PORT`              | number  | Application port          | `3000`                                                        |
| `PROD`              | boolean | Production mode flag      | `false` / `true`                                              |
| `MAILER_SERVICE`    | string  | Email service provider    | `gmail`                                                       |
| `MAILER_EMAIL`      | string  | Sender email address      | `noc@company.com`                                             |
| `MAILER_SECRET_KEY` | string  | Email authentication key  | `xxxx xxxx xxxx xxxx`                                         |
| `MONGO_URL`         | string  | MongoDB connection URL    | `mongodb://admin:pass@localhost:27017/?authMechanism=DEFAULT` |
| `MONGO_DB_NAME`     | string  | MongoDB database name     | `NOC`                                                         |
| `MONGO_USER`        | string  | MongoDB username          | `admin`                                                       |
| `MONGO_PASS`        | string  | MongoDB password          | `pass`                                                        |
| `POSTGRES_URL`      | string  | PostgreSQL connection URL | `postgresql://postgres:pass@localhost:5432/NOC`               |
| `POSTGRES_USER`     | string  | PostgreSQL username       | `postgres`                                                    |
| `POSTGRES_DB`       | string  | PostgreSQL database name  | `NOC`                                                         |
| `POSTGRES_PASSWORD` | string  | PostgreSQL password       | `pass`                                                        |

---

## 🎯 Available Scripts

| Command                  | Description                                        |
| ------------------------ | -------------------------------------------------- |
| `npm run dev`            | Development with auto-reload and console clearing  |
| `npm run build`          | Compile TypeScript to JavaScript (output: `dist/`) |
| `npm start`              | Build and run in production mode                   |
| `npm run docker:psql`    | Connect to PostgreSQL in Docker container          |
| `npm run docker:mongosh` | Connect to MongoDB in Docker container             |

---

## 🐳 Docker Database Access

### PostgreSQL

```bash
# Connect to PostgreSQL container
npm run docker:psql

# Or directly with Docker
docker exec -it 05-noc-postgres-db-1 psql -U postgres -d NOC
```

### MongoDB

```bash
# Connect to MongoDB container
npm run docker:mongosh

# Or directly with Docker
docker exec -it 05-noc-mongo-db-1 mongosh "mongodb://admin:pass@localhost:27017/?authMechanism=DEFAULT"
```

---

**Last updated:** October 2025

