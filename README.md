# Techerudite Task

## Project Overview

Welcome to the **My Auth Project**, a robust authentication system designed to manage user registrations for both customers and administrators. This project serves as an excellent demonstration of my skills in full-stack development, including database management, user authentication, and email verification. Built using **Node.js** for the backend  this application showcases my ability to create secure, user-friendly web applications.

## Key Features

### User Registration
- **Customer Registration**: 
  - Users can register as customers by providing the following information:
    - **First Name**
    - **Last Name**
    - **Email**
    - **Password**
  - On successful registration, users are automatically assigned the "customer" role.

- **Admin Registration**: 
  - Admin users can register with the same fields and are assigned the "admin" role upon registration.

### Email Verification
- Upon registration, users receive a verification email containing a link to confirm their email address.
- This process enhances security and ensures that users have provided a valid email.

### Admin Login
- Admins can log in using their registered email and password.
- If a user registered as a customer attempts to access the admin login, an error message is displayed: **"You are not allowed to login from here."**

### Technology Stack
- **Technology**: Node.js
- **Database**: Mongodb
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- Mongodb server running locally or accessible via the network.
- A code editor of your choice (e.g., VS Code).

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone <https://github.com/jigarvyasidea/Techerudite>
   cd my-auth-project

## Key Features
![image](https://github.com/user-attachments/assets/8dfd109f-ce66-46b2-a022-5569ffaf2f48)


### User Registration
- **Customer Registration**: 
  - Users can register as customers by providing the following information:
    - **First Name**
    - **Last Name**
    - **Email**
    - **Password**
  - On successful registration, users are automatically assigned the "customer" role.

    ![image](https://github.com/user-attachments/assets/2d15273f-5fee-4da2-94b5-831ab99f2136)

  ### automatically assigned the "customer" role =>
  ![image](https://github.com/user-attachments/assets/cdd98c6d-2834-4433-ba9e-39f8beab25b9)

- **Admin Registration**: 
  - Admin users can register with the same fields and are assigned the "admin" role upon registration.

![Admin Registration] ![image](https://github.com/user-attachments/assets/eb387c7b-2fab-42c7-8335-73ffb4164fca)

![Admin Assign role admin]
![image](https://github.com/user-attachments/assets/6fe21d1c-0a64-453b-bf82-41a3fc9b99a1)




