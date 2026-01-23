# Docker Compose Hands-On Project 🚀

This project demonstrates how to use **Docker Compose** and **Docker Volumes** to run a multi-container application! in a real-world DevOps-style setup.

The application consists of:
- A **Node.js (Express)** backend
- A **MongoDB** database
- Persistent storage using **Docker Volumes**

This setup reflects how DevOps engineers run applications locally, in CI pipelines, and in small-scale environments before moving to Kubernetes.

---

## 🛠️ Technologies Used

- Docker
- Docker Compose
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

docker-compose-demo/
├── app/
│ ├── Dockerfile
│ ├── index.js
│ └── package.json
└── docker-compose.yml


---

## ⚙️ How It Works

- Docker Compose defines **multiple services** in a single YAML file
- The **Node.js app** connects to MongoDB using the service name (`mongo`)
- MongoDB data is stored using a **named Docker volume**
- Containers can be stopped or recreated without losing data

---

## ▶️ How to Run the Project!

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd docker-compose-demo


2️⃣ Build and start containers
docker compose up --build

3️⃣ Access the application

Open your browser and visit:

http://localhost:3000
