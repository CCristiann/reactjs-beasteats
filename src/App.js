import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <Cards />
      <Menu />
      <Footer />
    </main>
    </>
  );
}

export default App;
