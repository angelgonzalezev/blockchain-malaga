import React from "react";
import Hero from "./containers/Hero";
import Partners from "./containers/Partners";
import Services from "./containers/Services";
import Sidebar from "./containers/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Partners />
      <Services />
    </div>
  );
}

export default App;
