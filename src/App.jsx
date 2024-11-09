import Header from "./components/Header";
import Banner from "./components/Banner";
// import Hero from "./components/Hero";
import Realisations from "./components/Realisations";
import Parcours from "./components/Parcours";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Parcours />
      {/* <Hero /> */}
      <Realisations />
      <Competences />
      <Contact />
      <Footer />
    </>
  );
}
