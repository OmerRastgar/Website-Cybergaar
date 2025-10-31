# CyberGaar Security

This is the official website for CyberGaar Security, a comprehensive cybersecurity services provider. This project is a single-page application (SPA) built with React and Tailwind CSS, showcasing the company's services, expertise, and commitment to open-source education.

## About CyberGaar

CyberGaar offers a wide range of cybersecurity services, including compliance audits for standards like ISO 27001, PCI DSS, and SOC 2, as well as penetration testing and vulnerability assessments. The company is dedicated to helping businesses of all sizes secure their digital assets and navigate the complex landscape of modern cybersecurity.

### Open Source AI for Cybersecurity Education

A unique feature of CyberGaar is its commitment to open-source education. The company has developed a free, open-source Large Language Model (LLM) dedicated to cybersecurity. This AI-powered chat, available at [ai.cybergaar.com](https://ai.cybergaar.com), is designed to educate, inform, and assist anyone interested in learning more about digital security. The model and its dataset are open-sourced to encourage community collaboration and transparency.

## Features

*   **Comprehensive Service Pages:** Detailed information about each of CyberGaar's services.
*   **AI-Powered Chat:** An open-source, educational AI chat for cybersecurity information.
*   **Responsive Design:** A fully responsive and mobile-friendly user experience.
*   **Interactive UI:** Engaging animations and a modern, clean design.
*   **Code-Splitting:** Optimized for performance with lazy-loaded pages and components.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v14 or later)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/cybergaar-security.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd cybergaar-security
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To view the website in a development environment, run the following command:

```sh
npm run dev
```

This will start a local development server, and you can view the website at `http://localhost:3000`.

## Building for Production

To create a production-ready build of the website, run:

```sh
npm run build
```

The optimized static files will be generated in the `dist` directory.

## Deployment

This project is configured for easy deployment to Firebase Hosting. To deploy the website, you will need to have the Firebase CLI installed and configured.

1.  Build the project for production:
    ```sh
    npm run build
    ```
2.  Deploy to Firebase:
    ```sh
    firebase deploy --only hosting
    ```

## Built With

*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [React Router](https://reactrouter.com/) - For declarative routing in the application.
*   [Vite](https://vitejs.dev/) - A modern front-end build tool that provides a faster and leaner development experience.
*   [Firebase](https://firebase.google.com/) - Used for hosting the website.
