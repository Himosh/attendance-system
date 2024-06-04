# School Attendance System

## Overview
Welcome to the School Attendance System project! This project is designed to manage student attendance efficiently.

## Table of Contents 
- [Features](#features)
- [Technologies Used](#technologies-used)
 - [Setup Instructions](#setup-instructions)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup) 
- [Running the Application](#running-the-application)
 - [Login Credentials](#login-credentials) 
- [Version Control](#version-control)

## Features
- User authentication using JWT tokens
- Login page for users to enter their credentials
- Home page displaying a welcome message and logout button
- Client-server interaction via REST API
- Proper redirection based on user authentication status

## Technologies Used
### Backend
- Java 21
- Spring Boot + Spring Security
- JWT for authentication

### Frontend
- ReactJS

## Setup Instructions
Clone the repository from GitHub:
```
git clone https://github.com/Himosh/attendance-system.git
```
### Backend Setup

1. Navigate to the `server` directory:
```
cd server
```
2. Build and run the backend server:
```
mvn spring-boot:run
```
or run the ServerApplication file in your IDE

### Frontend Setup
1. Navigate to the `client` directory:
```
cd client
```
2. Install dependencies:
```
npm install
```


## Running the Application
1. Start the backend server as per the instructions provided in the Backend Setup section.
2. Start the frontend development server:
```
npm install
```
4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Login Credentials
For testing purposes, you can use the following login credentials:
- Username: Himosh
- Password: Himosh

## Version Control
The project is version-controlled using Git. You can find the latest code on the [GitHub repository](https://github.com/Himosh/attendance-system.git).

