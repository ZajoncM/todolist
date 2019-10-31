import React from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Todo />
      </main>
    </div>
  );
}

export default App;
