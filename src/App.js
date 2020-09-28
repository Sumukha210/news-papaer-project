import React, { useContext } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import SearchBar from "./components/SearchBar";
import { DataContextProvider } from "./components/DataContext";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <DataContextProvider>
      <div className="App">
        <Header />
        <SearchBar />
        <div className="container">
          <CardContainer />
        </div>
        <Footer />
      </div>
    </DataContextProvider>
  );
};

export default App;
