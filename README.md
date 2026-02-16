# COLORS – LAMP Stack Web Application

## Description
COLORS is a full-stack web application built using the LAMP stack (Linux, Apache, MySQL, PHP).  
The application allows users to log in and manage a personal collection of colors through a web interface that communicates with backend API endpoints.  
This project demonstrates deployment of a web server, database connectivity, and client-server communication in a simple full-stack environment.

## Technologies Used
- Linux (Ubuntu / DigitalOcean server)
- Apache Web Server
- MySQL Database
- PHP Backend API
- HTML, CSS, JavaScript Frontend
- Postman / CURL for endpoint testing

## Project Structure
colors-lamp/
├── color.html
├── css/
│   └── styles.css
├── images/
│   └── background.png
├── index.html
├── js/
│   ├── code.js
│   └── md5.js
├── LAMPAPI/
│   ├── AddColor.php
│   ├── Login.php
│   └── SearchColors.php
├── LICENSE
├── README.md
└── .gitignore

## High-Level Setup Instructions
1. Create a Linux server running a LAMP stack (for example, an Ubuntu droplet on DigitalOcean).
2. Upload the project files to the web server root directory (`/var/www/html`).
3. Create a MySQL database for the application.
4. Configure the backend connection settings with the database credentials.
5. Ensure Apache and MySQL services are running.

## How to Run and Access the Application
Open a browser and navigate to:
http://your-server-ip

## Assumptions and Limitations
This project is intended for educational use and is not production hardened.  
Security configurations such as HTTPS and advanced validation are minimal.  
The database must be created manually before running the application.