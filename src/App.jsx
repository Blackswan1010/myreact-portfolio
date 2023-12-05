import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";

const styles = {
  container: {
    background: '#9a74db',
  },
}

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
