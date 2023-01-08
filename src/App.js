import React from "react";
import Hero from "./containers/Hero";
import Partners from "./containers/Partners";
import Sidebar from "./containers/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Partners />
    </div>
  );
}

export default App;
