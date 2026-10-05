# Hotel Booking System

A web-based hotel booking system built with **Node.js, Express.js, EJS, Prisma ORM, and MySQL**. The system provides separate functionality for customers and administrators, including user authentication, room management, and hotel room booking.

## Features

### Customer
- Customer registration and login
- Customer dashboard
- View available hotel rooms
- View room details
- Book a room with check-in and check-out dates
- Prevent booking a room when it is already booked for the selected dates
- View personal bookings
- Authentication using JWT

### Admin
- Admin authentication
- Admin dashboard
- Create hotel rooms
- View all rooms
- Edit room details
- Delete rooms
- View all customer bookings
- Update booking status
- Role-based access control

## Technologies Used

- **Node.js**
- **Express.js**
- **EJS**
- **Prisma ORM**
- **MySQL**
- **JWT**
- **bcrypt**
- **Cookie Parser**
- **JavaScript**
- **HTML/CSS**

## Project Structure

```text
hotel-booking-system/
│
├── config/
│   └── prisma.js
│
├── controller/
│   ├── AccountController.js
│   ├── BookingController.js
│   └── RoomController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── rolemiddleware.js
│
├── Routes/
│   ├── AccountRouter.js
│   ├── BookingRouter.js
│   └── RoomRouter.js
│
├── prisma/
│   └── schema.prisma
│
├── views/
│   └── hotel/
│       ├── register.ejs
│       ├── login.ejs
│       ├── dashboard.ejs
│       ├── adminDashboard.ejs
│       ├── createroom.ejs
│       ├── room.ejs
│       ├── editRoom.ejs
│       ├── CustomerRooms.ejs
│       ├── booking.ejs
│       ├── myBookings.ejs
│       └── allBookings.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

## Database

The project uses **MySQL** with **Prisma ORM**.

The database contains three main models:

- `Account` — stores customer and admin accounts
- `Room` — stores hotel room information
- `Booking` — stores customer room bookings

The Prisma schema is available in:

```text
prisma/schema.prisma
```

## Authentication & Authorization

The application uses **JWT-based authentication** stored in HTTP-only cookies.

Role-based middleware restricts access to specific areas:

- **CUSTOMER** — customer dashboard, room browsing, and personal bookings
- **ADMIN** — room management and viewing/managing all bookings

Passwords are securely hashed using **bcrypt** before being stored.

## Booking System

Customers can select a room and provide check-in and check-out dates.

Before creating a booking, the system checks whether the selected room already has an overlapping active booking.

If an overlapping booking exists, the customer is prevented from booking the room.

## Installation

Clone the repository:

```bash
git clone https://github.com/mahmad120133548-blip/Hotel-Booking-System.git
```

Navigate to the project:

```bash
cd Hotel-Booking-System
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="your_mysql_database_url"
JWT_SECRET="your_jwt_secret"
```

Replace the values with your own MySQL database connection and JWT secret.

> Do not commit your `.env` file or database credentials to GitHub.

## Database Setup

After configuring your MySQL connection, generate the Prisma client:

```bash
npx prisma generate
```

If setting up the database from the Prisma schema for the first time:

```bash
npx prisma migrate dev --name init
```

## Running the Application

Start the server with:

```bash
node app.js
```

The application runs on:

```text
http://localhost:2017
```

## Learning Outcomes

This project provided practical experience with:

- Building server-side rendered applications with Express.js and EJS
- Designing relational databases with MySQL
- Using Prisma ORM for database operations
- Implementing JWT authentication
- Password hashing with bcrypt
- Role-based authorization
- CRUD operations
- Room availability and booking validation
- MVC-style project organization
- Git and GitHub

## Author

**Muhammad Ahmad**

Bachelor of Business and Information Technology  
University of the Punjab
