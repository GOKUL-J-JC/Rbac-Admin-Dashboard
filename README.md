# RBAC Admin Dashboard

## Overview
This project is a Role-Based Access Control (RBAC) Admin Dashboard built using HTML, CSS, and JavaScript,Bootstarp. It allows the management of users and roles, with functionalities for adding, editing, and deleting users and roles. The users and roles are stored in `localStorage` for persistence between page reloads.

## Features
- **User Management**: 
  - Add, edit, and delete users.
  - Each user is assigned a role (Admin, Editor, or Viewer) and a status (Active or Inactive).
  - Validation ensures that all fields are filled before saving a user.
  
- **Role Management**:
  - Add, edit, and delete roles.
  - Each role can have one or more permissions (Read, Write, Delete).
  - Validation ensures that a role name is provided and at least one permission is selected before saving the role.
  
- **Data Persistence**: 
  - User and role data is stored in `localStorage` to persist data even after page reloads.

## Technology Stack
- **Frontend**: 
  - HTML
  - CSS
  - JavaScript
  - Bootstrap 


 - **Login Credentials**:
   
    ```Admin
    - Username: Admin
    - Email: admin@gmail.com
    - Password: admin123
    ```User 
    - Username: User
    - Email: user@gmail.com
    - Password: user123

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GOKUL-J-JC/Rbac-Admin-Dashboard.git
