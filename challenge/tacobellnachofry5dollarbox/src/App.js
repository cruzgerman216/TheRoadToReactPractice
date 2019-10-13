import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import PictureGenerator from "./components/PictureGenerator";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavigationBar />
      <PictureGenerator />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
