import "./App.css";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Reason from "./Components/Reasons/Reason";
import Plans from "./Components/Plans/Plans";
import Testimonial from "./Components/Testimonials/Testimonial";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
