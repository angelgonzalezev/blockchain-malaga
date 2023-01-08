import React from "react";
import Hero from "./containers/Hero";
import Partners from "./containers/Partners";
import Services from "./containers/Services";
import Sidebar from "./containers/Sidebar";
import Footer from "./containers/Footer";

function App() {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Partners />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
