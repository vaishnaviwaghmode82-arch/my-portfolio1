import Header from "./components/Header";
import Dishes from "./components/Dishes";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Dishes />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;