import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <Navbar darkMode={darkMode} setDarkMode={setdarkMode} />
        <Component
          darkMode={darkMode}
          setDarkMode={setdarkMode}
          {...pageProps}
        />
      </main>
    </div>
  );
}
