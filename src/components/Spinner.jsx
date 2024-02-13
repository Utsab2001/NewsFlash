import React, { Component } from "react";
import loading from "./loading.gif";

function Spinner() {
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <img className="my-3" src={loading} alt="loading..." />
    </div>
  );
}

export default Spinner;
