# ChoresList

A simple web app to keep track of household chores. Add chores to a shared list, powered by Firebase Realtime Database, and view them instantly across devices.

## Features

- Add chores to a shared list
- Real-time updates using Firebase
- Clean, responsive UI
- Built with Vite for fast development

**Note:** The "Delete All" button is present in the UI but not yet implemented.

## Demo

![Screenshot](assets/happybirthday.gif)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd choresList
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

### Building for Production

To build the app for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `index.html` – Main HTML file
- `index.js` – App logic (Firebase integration, UI updates)
- `index.css` – Styles
- `assets/` – Static assets (e.g., GIF demo)

## Tech Stack

- [Vite](https://vitejs.dev/) – Frontend build tool
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database) – Backend
- Vanilla JavaScript, HTML, and CSS

## Firebase Setup

This project uses a public Firebase Realtime Database. If you want to use your own Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Replace the `firebaseConfig` in `index.js` with your own config.

## License

MIT
