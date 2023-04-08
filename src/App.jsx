import { useEffect } from "react";
import Footer from "./components/Footer";
import { Main } from "./components/Main";
import Navbar from "./components/Navbar";

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
