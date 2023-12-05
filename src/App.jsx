import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <div>
        <Header/>
      <Navigation />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
