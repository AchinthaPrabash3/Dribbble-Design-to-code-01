import Content from "./ContentSection";
import Fotter from "./Foter";
import FotterBanner from "./FotterBanner";
import Header from "./Header";
import HeroSection from "./HeroSection";

function App() {
  return (
    <>
      <main className="container mx-auto bg-white">
        <Header />
        <HeroSection />
        <Content />
        <FotterBanner />
        <Fotter />
      </main>
    </>
  );
}

export default App;
