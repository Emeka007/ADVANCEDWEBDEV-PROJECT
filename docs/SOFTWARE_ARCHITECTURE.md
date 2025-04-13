# 🏗️ Software Design and Architecture

## 📌 Overview

This software system is a modular and scalable web application designed to optimize **parcel delivery and emission tracking**. It is architected around a **React-based frontend**, a **NodeJS-powered backend**, and a **PostgreSQL database**. The system follows a **service-oriented architecture** and communicates primarily through **REST APIs**.

👉 [View Full Architecture on Canva](https://www.canva.com/design/DAF2_XFD4xs/cDNRK073cZ9Brg_7a3qeXw/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0)

---

## 🎨 Frontend Design

The **frontend** is built using:
- **React.js**: Handles the dynamic UI rendering and state management.
- **Figma**: Used for prototyping and wireframe design.

📎 [Wireframe & UI Design (Figma)](https://www.figma.com/design/YdHhIYwsTxBTRNlbtngNef/Advance-web-development?node-id=0-1&p=f&t=A9cdYgSSEfD07XA6-0)

### Frontend Responsibilities
- Customer and admin dashboards.
- Parcel creation and tracking.
- Real-time emission feedback.
- Responsive UI for mobile and desktop.
- Data visualization for reports.

### Component Breakdown
- `components/`: Reusable UI elements (e.g., buttons, tables, modals).
- `pages/`: Page-level containers like Home, Dashboard, Reports.
- `hooks/`: Custom hooks for data fetching and auth.
- `assets/`: Images, logos, icons, etc.

---

## 🔧 Backend Architecture

Built using **NodeJS** and split into multiple service layers:

### Core Services:
- **Admin Service**: Handles user, driver, and vehicle management.
- **Emission Calculation Service**: Estimates CO2 emissions based on delivery metrics.
- **Reporting Module**: Generates summaries, graphs, and stats.

### Communication:
- RESTful APIs exposed to the frontend.
- Input/output validation and error handling.
- Asynchronous data flow for performance.

---

## 🗄️ Database Design (PostgreSQL)

### Schema Overview
The system leverages **PostgreSQL** as the primary relational database. The design captures all business entities and their relationships:

[PostgreSQL Database Design (LucidChart)](https://lucid.app/lucidchart/2dbe3929-ff5a-4bf3-98f6-20bfeeaad669/edit?viewport_loc=-8346%2C-1490%2C12563%2C5471%2C0_0&invitationId=inv_16058e36-491f-4111-b8e0-9e3c4833ac30)

## 🔁 Data Flow & Logic

### End-to-End Flow:
1. **Users** interact with the frontend (React).
2. **REST APIs** send requests to the Java backend.
3. Backend:
   - Validates and processes requests.
   - Triggers the **Emission Service** if needed.
   - Retrieves or stores data in PostgreSQL.
4. **Drivers** and **Customers** receive real-time updates.
5. **Reports** are generated from processed emissions and deliveries.

---

## 📈 Key Features

- **Emission Calculation**: Based on vehicle type, mileage, and package weight.
- **Admin Portal**: Manage users, drivers, and vehicles.
- **Customer Dashboard**: View parcel history and track CO2 impact.
- **Reporting Engine**: Visualize emission savings over time.
- **Authentication**: Secure access with hashed credentials.
- **Responsiveness**: Mobile-friendly UI.

---

## ⚙️ System Components

| Component      | Technology     | Description                          |
|----------------|----------------|--------------------------------------|
| Frontend       | React + Figma  | UI/UX rendering and interactions     |
| Backend        | NodeJS         | Business logic and API layer         |
| Database       | PostgreSQL     | Persistent storage                   |
| Auth & Sessions| JWT / OAuth2   | Secure login and role-based access   |
| Deployment     | Docker         | Containerized environment            |

---


## ☁️ Cloud Environment & Deployment Strategy

The system is designed to be cloud-native, leveraging scalable and secure cloud services for deployment and management. Below is the recommended cloud infrastructure stack:

| Service                 | Cloud Provider     | Description                                              |
|-------------------------|--------------------|----------------------------------------------------------|
| **Frontend Hosting**    | Vercel / Netlify   | Continuous deployment and global CDN for React frontend |
| **Backend Hosting**     | AWS Elastic Beanstalk / Render / Railway | Managed NodeJS runtime environment                    |
| **Database**            | AWS RDS / Supabase | Scalable, managed PostgreSQL service                     |
| **Authentication**      | Auth0 / AWS Cognito| Secure user management and JWT-based auth                |
| **Storage**             | AWS S3 / Cloudinary| Asset and media storage                                  |
| **CI/CD Pipeline**      | GitHub Actions     | Automated build, test, and deployment workflows          |
| **Container Orchestration** | AWS ECS / GCP Cloud Run | Docker-based service deployment                        |
| **Monitoring**          | Datadog / AWS CloudWatch | Real-time logs and metrics tracking                 |

This environment ensures high availability, performance, and security compliance for modern web applications.

---

## 🛠️ Future Improvements

- CI/CD pipeline (GitHub Actions).
- Unit & integration testing (Jest, JUnit).
- Admin analytics dashboard.
- Email notifications for deliveries.
