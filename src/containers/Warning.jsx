import React from "react";

const Warning = () => {
  return (
    <div className="bg-rose-200 p-4 text-sm">
      <p className="font-semibold">
        ADVERTENCIA ⚠️: Esta no es la página oficial de Blockchain Málaga. Si
        desea visitar la página oficial de{" "}
        <span className="font-bold">Blockchain Málaga</span> haga click aquí 👉{" "}
        <a href="https://blockchainmalaga.es/" className="font-bold underline">
          blockchainmalaga.es
        </a>
      </p>
    </div>
  );
};

export default Warning;
