import { React } from "react";
import { Main } from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';

// const baseURL = "https://jsonplaceholder.typicode.com/";

function App() {

  return (
      <div className="App">
          <Navbar/>

          <Main />

          <Footer/>
      </div>
  );

}

export default App;
