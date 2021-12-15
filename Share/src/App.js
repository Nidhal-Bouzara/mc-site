// Containers
import AboutUs from "./containers/AboutUs/AboutUs";
import ClubStructure from "./containers/ClubStructure/ClubStructure";
import Footer from "./containers/Footer/Footer";
import HeroSection from "./containers/HeroSection/HeroSection";
import OurEvents from "./containers/OurEvents/OurEvents";
import OurSponsors from "./containers/OurSponsors/OurSponsors";

function App() {
  return (
    <div className="App">
      <main>
        <HeroSection />
        <OurEvents />
        <ClubStructure />
        <AboutUs />
        <OurSponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
