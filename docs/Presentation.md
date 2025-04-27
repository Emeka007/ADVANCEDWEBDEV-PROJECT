# 📦 EcoTrack Delivery System
An end-to-end parcel delivery and CO₂ emission tracking platform  
Built with **React.js**, **Node.js**, **Express.js**, **PostgreSQL**, and **AWS Cloud**.

---

## 🧩 Table of Contents
- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Architecture](#-architecture)
- [Use Cases](#-use-cases)
- [Development Process](#-development-process)
- [Reflection and Future Work](#-reflection-and-future-work)
- [Useful Links](#-useful-links)

---

## 🎯 Project Overview
EcoTrack Delivery System aims to modernize logistics by providing:
- Seamless booking of deliveries
- Secure payment tracking
- Real-time carbon emission monitoring
- Admin dashboards for operations management

### Target Users:
- Eco-conscious customers
- Professional drivers
- Admin teams overseeing logistics

---

## 🛠️ Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Frontend** | React.js, Material UI, Figma for prototyping |
| **Backend** | Node.js, Express.js, JWT Authentication |
| **Database** | PostgreSQL with optimized queries |
| **Cloud Deployment** | AWS (Elastic Beanstalk, RDS) |
| **DevOps & CI/CD** | GitHub Actions, Docker, Prometheus, CloudWatch |

---

## 🚀 Features
- User authentication (JWT-secured sign in / sign up)
- Parcel booking for documents and heavy goods
- Payment History with filtering/search (DataGrid)
- CO₂ Emission Tracking Dashboard
- Admin Management Panel (users, vehicles, reports)
- Responsive UI optimized for mobile/tablet/desktop
- Accessibility standards (WCAG compliance)

---

## 🏗️ Architecture
The system follows a service-oriented and modular microservices-inspired design:


- **Frontend:** SPA with protected routes using React Router.
- **Backend:** Modular services for authentication, booking, payments, and emissions.
- **Database:** Normalized tables with optimized indexes and relationships.

📎 [View Full Architecture on Canva](#)

---

## 📋 Use Cases

| Use Case | Implemented | Notes |
|:---------|:------------|:------|
| User login & reservation booking | ✅ | Secure session, protected routes |
| View booking history & emissions tracking | ✅ | Dynamic dashboards with graphs |
| Manage users, vehicles, parcels | ✅ | Admin portal |
| Real-time notifications | ❌ | Planned for future enhancement |

📎 [Wireframe & UI Design on Figma](#)

---

## 🛠️ Development Process
- Agile-based sprints (weekly)
- Used GitHub projects and issues for tracking
- CI/CD pipelines built using GitHub Actions
- Automated Docker builds for consistent deployments
- Progressive UI and backend refinements after user testing feedback

---

## ☀️ Reflection and Future Work

### Achievements
- Seamless Frontend-Backend integration
- Secure and scalable cloud deployment
- Real-time metrics and data visualizations
- WCAG-compliant accessible design

### Challenges
- Complex responsive sidebar behavior
- Database transaction consistency under load

### Future Enhancements
- ✉️ Real-time notifications (email/SMS alerts)
- 📈 Advanced Admin Analytics Dashboard
- 📝 Editable user profiles
- 🛠️ Backend scalability via Kubernetes (EKS)

---

## 📙 Useful Links
- 📎 [Project Architecture (Canva)](#)
- 🎨 [Wireframes & Prototypes (Figma)](#)

---

**EcoTrack Delivery System — Driving towards a greener logistics future. 🌱**
