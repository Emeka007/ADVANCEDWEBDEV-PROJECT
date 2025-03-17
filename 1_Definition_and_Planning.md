# Project Documentation

## Purpose of the Project
The purpose of this project is to develop a robust and efficient logistics management system that streamlines booking, tracking, reporting, and security processes. By leveraging modern technology, the system aims to enhance user experience, optimize resource allocation, and ensure secure data management. The project is designed to cater to various stakeholders, including customers, administrators, delivery personnel, and analysts, by providing an intuitive interface, real-time tracking, and insightful analytics. Additionally, it incorporates sustainability goals by calculating and reporting carbon emissions, enabling businesses to make informed, eco-conscious decisions.

## Phase 1 - Definition and Planning
This document outlines the comprehensive details of user personas, use cases, UI prototypes, information architecture, technical design, project management, and user testing for the project.

---

## 1. User Personas
User personas are fictional representations of target users, based on research and data. Below are five key personas:

### **1. Emily Carter (Admin & Logistics Manager)**
- **Age:** 38
- **Role:** Admin – Manages deliveries and reporting
- **Pain Points:**
  - Struggles with tracking driver performance
  - Needs automated reports to monitor trends
- **Goals:**
  - Optimize delivery efficiency
  - Improve emissions tracking

### **2. David Mitchell (Delivery Driver)**
- **Age:** 45
- **Role:** Driver – Assigned to trips and deliveries
- **Pain Points:**
  - Finds it hard to track assigned trips
  - Wants real-time updates for route changes
- **Goals:**
  - Complete trips efficiently
  - Reduce unnecessary delays

### **3. Sarah Lin (Customer Booking Shipments)**
- **Age:** 29
- **Role:** Customer – Books and tracks deliveries
- **Pain Points:**
  - Wants real-time tracking for her deliveries
  - Needs easy cancellation options
- **Goals:**
  - Book shipments quickly
  - Get accurate ETA updates

### **4. Michael Thompson (System Administrator)**
- **Age:** 40
- **Role:** System Admin – Manages security & APIs
- **Pain Points:**
  - Needs better API security against attacks
  - Wants automated database backups
- **Goals:**
  - Ensure system stability
  - Implement strong security protocols

### **5. Olivia Sanders (Business Analyst)**
- **Age:** 35
- **Role:** Analyst – Uses reports for insights
- **Pain Points:**
  - Struggles with manual report generation
  - Needs customizable filters for data
- **Goals:**
  - Improve data-driven decision-making
  - Enhance emissions monitoring

---

## 2. Use Cases and User Flows
Each use case follows a structured format:

### **Use Case 1: User Authentication (Login & JWT Token Generation)**
- **Actors:** User, System
- **Preconditions:** User must have an account
- **Main Flow:** User enters credentials → System verifies → JWT token generated → User logged in
- **Alternative Flow:** Invalid credentials → Error message
- **Postconditions:** User authenticated

### **Use Case 2: Booking a Delivery**
- **Actors:** Customer, System
- **Preconditions:** User logged in, available delivery slots
- **Main Flow:** User selects date → Enters details → Confirms booking
- **Alternative Flow:** Date unavailable → Choose another
- **Postconditions:** Booking stored, confirmation sent

### **Use Case 3: Viewing & Filtering Reports**
- **Actors:** Admin, System
- **Preconditions:** Admin logged in, stored trip data
- **Main Flow:** Admin applies filters → System fetches data → Displays reports
- **Alternative Flow:** No matching data → "No Results Found"
- **Postconditions:** Data analyzed, reports generated

### **Use Case 4: Assigning a Driver to a Trip**
- **Actors:** Admin, Driver
- **Preconditions:** Trip exists, driver registered
- **Main Flow:** Admin assigns driver → Driver notified
- **Alternative Flow:** No drivers available
- **Postconditions:** Driver receives assignment

### **Use Case 5: Calculating Carbon Emissions for a Trip**
- **Actors:** Admin, System
- **Preconditions:** System has trip data (vehicle type, distance, fuel type)
- **Main Flow:** Admin selects trip → System calculates emissions → Report generated
- **Alternative Flow:** Missing data → Manual input required
- **Postconditions:** Emission reports generated

---

## 3. UI Prototypes
Prototypes serve as a visual representation of the application’s interface:
- **Tools Used:** Figma
- **Components:**
  - **Login & Authentication** (Secure login, role-based access)
  - **Dashboard** (Overview of bookings, trips, reports)
  - **Booking System** (Create, update, cancel bookings)
  - **Reporting & Analytics** (Graphs, data trends, export options)
  - **User Management** (Role assignment, permissions)

---

## 4. Information Architecture and Technical Design
- **Frontend:** React.js (Material UI for UI components, NivoCharts for data visualization)
- **Backend:** Java (Spring Boot, PostgreSQL for database management)
- **Security:** JWT authentication, OAuth 2.0 for third-party login
- **API Integration:** REST API endpoints for communication between frontend and backend
- **Database:**
  - **Users Table** (ID, Name, Email, Role)
  - **Bookings Table** (Booking ID, User ID, Status, Date)
  - **Reports Table** (Report ID, Type, Data, Generated Date)

---

## 5. Project Management and User Testing
### **Project Management Tools**
- **Jira:** Task tracking, sprint planning
- **GitHub:** Version control
- **Canva:** Visual documentation
- **Postman:** API testing

### **Testing Process**
- **Unit Testing:**
  - Verify individual components work as expected
- **Functional Testing:**
  - Validate user login, booking process, and reporting features
- **Performance Testing:**
  - Ensure quick database queries, API response times
- **Security Testing:**
  - Test JWT authentication, role-based access
- **User Acceptance Testing (UAT):**
  - Real-world user scenarios tested before deployment

---

## Conclusion
This documentation outlines the essential details of the project from initial planning to implementation. The structured approach ensures usability, security, and efficiency in managing deliveries and reporting.
