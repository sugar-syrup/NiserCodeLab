---
# NiserCodeLab

**NiserCodeLab** is a web application created by NISER students to host coding competitions. This project is a part of the NISER Coding Club, and we welcome contributions from the community.

## Tech Stack

- **Frontend:** React TypeScript
- **Backend:** Django

## How to Set Up

To set up the NiserCodeLab project on your local machine, follow the steps below:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sugar-syrup/NiserCodeLab.git
   ```

2. **Set Up the Virtual Environment**
   ```bash
   python -m venv .\venv
   ```

3. **Activate the Virtual Environment**
   - For Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - For Linux or MacOS:
     ```bash
     source .\venv\bin\activate
     ```

4. **Install Backend Dependencies**
   ```bash
   pip install -r .\NiserCodeLabBackend\requirements.txt
   ```

5. **Install Frontend Dependencies**
   ```bash
   cd .\NiserCodeLabFrontend\
   npm i
   ```

6. **Build the Frontend**
   ```bash
   npm run build
   ```

7. **Run the Backend Server**
   ```bash
   cd ..\NiserCodeLabBackend\
   python manage.py runserver
   ```

## Contributions

The app is currently under development, and we welcome contributions from anyone interested. Whether you're a seasoned developer or just getting started, there's a place for you in this project.

## About

This project is led by [Me](https://github.com/sugar-syrup) as part of the [**NISER Coding Club**](https://sdgniser.github.io/).

---
