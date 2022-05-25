import "./App.css";
import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  let [currentPage, setPage] = useState("about");

  function renderPage() {
    switch (currentPage) {
      case "about":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
    }
  }

  return (
    <main>
      <Header setPage={setPage}/>
      {renderPage()}
      <Footer />
    </main>
  );
}

export default App;
