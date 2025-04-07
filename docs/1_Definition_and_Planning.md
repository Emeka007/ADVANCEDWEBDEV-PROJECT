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

## **3. UI Prototypes**
Prototypes serve as a visual representation of the application’s interface. The system follows a **modular structure**, ensuring seamless navigation and accessibility.

### **Tools Used**
- **Figma** (for design and prototyping)
- **React.js with Material UI** (for implementation)
- **NivoCharts** (for data visualization)

### **UI Views**
The UI consists of multiple views, each designed to meet specific user needs:

#### **1. Login & Authentication (`login`)**
- **Purpose:** Secure user authentication with role-based access.
- **Features:**
  - Email & password login with JWT authentication.
  - Role-based login (Admin, Customer, Driver).
  - "Forgot Password" feature for password recovery.
  - Error handling for incorrect credentials.
- **View Details:**
  - Clean and minimalistic login form.
  - Animated loading spinner during authentication.
  - Alerts for login failures.

#### **2. Dashboard (`dashboard/index.jsx`)**
- **Purpose:** Provide an overview of bookings, trips, and analytics.
- **Features:**
  - Real-time tracking of deliveries.
  - KPI widgets displaying total trips, revenue, and performance metrics.
  - Interactive data visualization using bar, pie, and line charts.
  - Quick access navigation to settings, reports, and user management.
- **View Details:**
  - Left-side navigation menu for easy access to features.
  - Customizable dashboard layout based on user role.

#### **3. Booking System (`form`)**
- **Purpose:** Allow customers to book shipments quickly.
- **Features:**
  - Step-by-step booking form.
  - Live cost estimation based on distance and weight.
  - Booking modification and cancellation options.
  - Confirmation screen with tracking details.
- **View Details:**
  - Intuitive form with auto-suggestions for address fields.
  - Clear CTA buttons for "Book Now" and "Cancel."

#### **4. Delivery Tracking & Geography (`geography`)**
- **Purpose:** Provide real-time delivery status updates.
- **Features:**
  - GPS-based tracking with map integration.
  - Status updates like "In Transit," "Out for Delivery," and "Delivered."
  - Estimated time of arrival (ETA) predictions.
- **View Details:**
  - Interactive maps showing delivery routes.
  - Status update notifications for customers.

#### **5. Reports & Analytics (`performance_metric`, `pie`, `line`)**
- **Purpose:** Allow admins and analysts to generate and view reports.
- **Features:**
  - Customizable filters for reports (date range, delivery status, driver performance).
  - Different visualization formats (pie charts, line graphs, bar charts).
  - Export options (CSV, PDF).
- **View Details:**
  - Data tables with sortable columns.
  - Graphical representation of key logistics metrics.

#### **6. User Management & Settings (`settings`)**
- **Purpose:** Manage user roles, permissions, and application settings.
- **Features:**
  - Role-based access control (RBAC) for different user types.
  - Password reset and profile management.
  - System-wide configurations.
- **View Details:**
  - Intuitive settings menu with categorized sections.
  - Clear indicators for permissions and access rights.

#### **7. Invoices & Payments (`invoices`)**
- **Purpose:** Allow users to view and download invoices for shipments.
- **Features:**
  - List of past invoices with filtering options.
  - PDF invoice generation.
  - Payment status tracking.
- **View Details:**
  - Invoice preview screen before download.
  - Secure payment integration for outstanding invoices.

#### **8. Trip Details & Assignment (`Trip Details`)**
- **Purpose:** Provide admins and drivers with detailed trip information.
- **Features:**
  - List of all trips with assignment details.
  - Driver notifications for new assignments.
  - Trip completion status updates.
- **View Details:**
  - Trip summary including pickup and drop-off locations.
  - Driver contact details for coordination.

#### **9. Feedback & Ratings (`Feedback and Ratings`, `Rating`)**
- **Purpose:** Allow customers to rate delivery services and provide feedback.
- **Features:**
  - Star ratings and written reviews for completed deliveries.
  - Admin dashboard to monitor feedback trends.
  - Automated sentiment analysis for reviews.
- **View Details:**
  - Rating form with optional comments.
  - Aggregated rating scores visible to admins.

#### **10. FAQs & Support (`faq`)**
- **Purpose:** Provide answers to common user queries.
- **Features:**
  - Categorized FAQ section.
  - Search functionality for quick answers.
  - Contact support form for additional assistance.
- **View Details:**
  - Simple accordion-style FAQ layout.
  - Quick access to live support options if needed.

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
