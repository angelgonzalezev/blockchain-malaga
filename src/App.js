import React from "react";
import Hero from "./containers/Hero";
import Partners from "./pages/home/containers/Partners";
import Services from "./pages/home/containers/Services";
import Sidebar from "./pages/home/containers/Sidebar";
import Footer from "./pages/home/containers/Footer";
import Warning from "./pages/home/containers/Warning";

function App() {
  return (
    <div>
      <Warning />
      <Sidebar />
      <Hero />
      <Partners />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
