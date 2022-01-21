import React from "react";
import "./app.css";
import withBookstoreService from "../hoc/with-bookstore-service";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return (
    <div className="app">
      <h1>Re-Store</h1>
    </div>
  );
};

export default withBookstoreService()(App);