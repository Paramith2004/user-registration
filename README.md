# 🌟 User Registration System

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=for-the-badge)

---

A simple yet powerful **User Registration System** built using **Node.js**, **Express.js**, and **MongoDB**.  
This project allows users to **register, log in, and manage their data** with secure password hashing and clean RESTful API design.

---

## 🚀 Features

✅ Register new users with validation  
✅ Store user data securely in MongoDB using Mongoose  
✅ Unique email validation to prevent duplicates  
✅ Passwords encrypted using **bcrypt**  
✅ Modular project structure (Models, Routes, Views)  
✅ API testing supported via **Postman**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| View Engine | EJS |
| Testing | Postman |

---

## 📂 Project Structure

```
user_registration/
│
├── models/
│   └── user.js              # Mongoose User Schema
│
├── routes/
│   └── userRoutes.js        # Express Routes (Register, Login)
│
├── views/
│   ├── register.ejs         # Registration Form
│   ├── login.ejs            # Login Form
│   └── success.ejs          # Success Page
│
├── public/
│   └── css/
│       └── style.css        # Basic CSS Styling
│
├── app.js                   # Main Express Application
├── index.js                 # Entry point / server setup
└── package.json             # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/user_registration.git
cd user_registration
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup MongoDB
- Make sure MongoDB is running locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Add your connection string in `index.js` or in a `.env` file (if using dotenv).

### 4️⃣ Start the server
```bash
node index.js
```

Server will start on **http://localhost:3000** 🚀

---

## 🧪 API Endpoints (for Postman)

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/register` | Register a new user |
| **POST** | `/login` | Log in a user |
| **GET** | `/success` | Display success page |

### Example Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword123"
}
```

---

## 🔒 Security

- Passwords are **hashed using bcrypt** before saving to the database.  
- Emails are **unique and validated**.  
- No plain text credentials are stored.

---

## 💡 Future Improvements

- Add JWT authentication  
- Include “Forgot Password” feature  
- Add profile management and user dashboard  
- Implement full CRUD functionality (Read, Update, Delete)

---

## 🧑‍💻 Author

**Paramith Kavisha**  
📧 paramithkavisha@gmail.com  
💻 https://github.com/Paramith2004

---

## 🌈 License

This project is licensed under the **MIT License** — feel free to use and modify!

---

## 🖼️ Preview (Optional)

```
<img width="1366" height="645" alt="Screenshot (128)" src="https://github.com/user-attachments/assets/f20e2cf9-e729-4c05-b545-52adff02cf05" />
<img width="1366" height="641" alt="Screenshot (129)" src="https://github.com/user-attachments/assets/741f9720-7783-4b20-8aa3-3d45de2d9d42" />

```

---

### ⭐ Don’t forget to star this repo if you found it helpful!
