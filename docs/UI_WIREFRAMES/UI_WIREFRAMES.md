# 🖼️ UI Wireframes & Layout Design Document

## 🔗 Figma Design Link

You can explore the full UI prototype here:  
👉 [Figma Wireframe – Advanced Web Development Project](https://www.figma.com/design/YdHhIYwsTxBTRNlbtngNef/Advance-web-development?node-id=0-1&p=f&t=A9cdYgSSEfD07XA6-0)

---

## 🧩 Application Overview

This project consists of multiple user roles including **Consumer**, **Driver**, and **Admin**. Each user type interacts with the system through a clean, intuitive interface optimized for web.

---

## 🧭 Navigation Flow

Landing Page ├── Sign In ├── Sign Up │ └── Form: name, email, password, age, phone, address └── Dashboard (post-authentication) ├── User Role Detection │ ├── Consumer Dashboard │ ├── Driver Dashboard │ └── Admin Dashboard (future scope)


---

## 📱 Pages & Screens

### 1. 🔐 Sign In Page
- **Fields**: Email, Password
- **Validations**: Inline error messages
- **CTA**: Sign In Button
- **Link**: "Forgot Password?"
- **UI Features**:
  - Overlay panel toggle between Sign In and Sign Up
  - Dynamic validation
  - Mobile-friendly layout

---

### 2. 📝 Sign Up Page
- **Fields**: Name, Email, Password, Age, Phone Number, Address
- **Validation**: Required fields, password strength
- **User Type (future)**: Radio or dropdown for role selection
- **Action**: Register & Redirect to appropriate dashboard

---

### 3. 🧾 Dashboard (Role-Based)
#### A. Consumer Dashboard
- Welcome message
- View Reports button
- Profile summary
- Placeholder for upcoming reports/features

#### B. Driver Dashboard
- Task List or Delivery Schedule
- Notifications
- Profile & Route details

#### C. Admin Panel (Phase 4)
- Manage Users
- View System Logs
- API Testing Tools (via Swagger/Postman)

---

## 🗂 Components Overview

| Component        | Description                           |
|------------------|---------------------------------------|
| `Navbar`         | Top nav with links to dashboard/logout |
| `SignInForm`     | Login UI logic and state              |
| `SignUpForm`     | Register new user                     |
| `DashboardCard`  | Display user-specific dashboard data  |
| `ErrorMessage`   | Reusable component for inline errors  |
| `Loader`         | Optional spinner during API calls     |

---

## 🎨 UI/UX Design Principles

- **Consistency**: Same layout across pages with visual hierarchy
- **Accessibility**: Color contrasts and keyboard navigation
- **Responsiveness**: Works across screen sizes
- **Minimalism**: Clean typography, soft palette, and lots of whitespace
- **Microinteractions**: Button hover states, form feedback

---

## 🔜 Future UI Enhancements

- **Profile Editing Page**
- **Dark Mode Toggle**
- **Admin Analytics Dashboard**
- **Mobile Navigation Drawer**
- **Chat/Feedback Widget**

---

## 🧠 Notes

- All screens are designed with Figma and available for export to HTML/CSS.
- Design decisions are based on simplicity and user-first accessibility.

---

**Authors**: `Olomiyesan and Obanya (Advanced Web Development Project)`  
📆 **Last Updated**: April 2025  


