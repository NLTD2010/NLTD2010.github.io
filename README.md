# NLTD2010's Website

Welcome to my personal website! This is a modern and elegant website designed to showcase my work, thoughts, and experiences. It also includes a blog section where I share articles on topics I’m passionate about. Built with cutting-edge technologies like **React**, **Vite**, **TailwindCSS**, and more, this website is fast, responsive, and easy to maintain.

---

## 🌟 Features
- **Personal Portfolio**: Highlight your projects and achievements.
- **Blog Section**: Share articles and insights.
- **Theme Switcher**: Seamlessly switches between light and dark themes.

---

## 🚀 How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/NLTD2010/NLTD2010.github.io.git
cd NLTD2010.github.io
```

### 2. Edit Environment Variables
1. Open the `.env.example` file in the root directory.
2. Update the environment variable values as needed.
3. Rename the file to `.env`:
   ```bash
   mv .env.example .env
   ```

### 3. Debug in Development Mode
To start the website in development mode, run:
```bash
npm run dev
```
This will start a local development server and watch for changes.

### 4. Build for Production
To build the website for production, run:
```bash
npm run build
```
The built files will be available in the `dist` directory.

### 5. Preview the Production Build
To preview the production build locally:
```bash
npm run preview
```

---

## 💂️ Project Structure
A quick overview of the project folder structure:

```
.
├── public/             # Static assets (images, icons, etc.)
├── src/                # Main source code
│   ├── components/     # Reusable components (e.g., Navbar, ThemeSwitcher)
│   ├── pages/          # Application pages (e.g., Blog, Devices, Home)
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── hooks/          # Custom React hooks (e.g., useTheme, settingData)
│   ├── data/           # Local JSON data files
├── .env.example        # Environment variable example file
├── .gitignore          # Ignored files and folders
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## 💻 Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tooling for fast builds and HMR.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Advanced animations and interactions.
- **React Router**: Declarative routing for React applications.

---

## ⚠️ Notes
- Make sure to use a valid `.env` file to configure the project properly.
- This project includes sensitive configurations; never expose secrets in your frontend application.
- Build artifacts (`dist` folder) should be deployed to a static hosting platform like GitHub Pages, Vercel, or Netlify.

---

## 📌 Author's Note
This project is a personal endeavor created with care and dedication. If you use any part of the code or design, kindly attribute the source to the original author.

Thank you for exploring this project!

