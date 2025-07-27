

### 📄 `README.md`

```markdown
# 🔐 Password Generator App

A stylish and secure **Password Generator** built using **React (Frontend)** and **FastAPI (Backend)**.
Users can customize password length and choose whether to include numbers and special characters.
 The app features a sleek UI with animated gradients and glassmorphism design.

---


## 🛠️ Tech Stack

### Frontend (React)
- ReactJS (with Hooks)
- Axios (HTTP client)
- Plain CSS with Glassmorphism + Gradient animation

### Backend (FastAPI)
- FastAPI (Python 3)
- Pydantic (for data validation)
- CORS middleware

---

## 📁 Project Structure

```

[![Live](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://securepassword-2.onrender.com/)

---

## 🚀 Features

- ✅ Generate random passwords
- ⚙️ Customize:
  - Minimum length
  - Include numbers
  - Include special characters
- 🎨 Beautiful UI with animated gradients & hover effects
- 🔁 Real-time generation using FastAPI API

---

## 📦 Installation & Setup

### 🧠 Prerequisites
- Python 3.7+
- Node.js (v14+)
- npm or yarn

---

### 🔧 Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn
pip install -r requirements.txt  # If you create one
uvicorn main:app --reload
````

> Server will run at: `http://127.0.0.1:8000`

---

### 🌐 Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

> App will run at: `http://localhost:3000`

---

## 🧪 Example Request (Backend)

**POST** `/generate`

```json
{
  "minLength": 12,
  "numbers": true,
  "specialCharacters": true
}
```

**Response**

```json
{
  "password": "A1!eU^kPx@L9"
}
```

---

## 📸 Screenshots



---<img width="1440" height="782" alt="Screenshot 2025-07-27 at 9 40 09 PM" src="https://github.com/user-attachments/assets/b79c8de3-9554-4920-8896-fbe9434cfcfb" />


## 🧠 Future Improvements

* ✅ Copy to clipboard button
* 🔐 Password strength meter
* 🌍 Multi-language support
* 📱 Mobile responsiveness

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 💬 Acknowledgments

* [FastAPI Docs](https://fastapi.tiangolo.com/)
* [React Docs](https://reactjs.org/)


