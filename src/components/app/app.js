import React from "react";
import "./app.css";
import ErrorBoundry from "../error-boundry";

const App = () => {
  return (
    <ErrorBoundry>
      <div className="app">
        <h1>Re-Store</h1>
      </div>
    </ErrorBoundry>
  );
};

export default App;