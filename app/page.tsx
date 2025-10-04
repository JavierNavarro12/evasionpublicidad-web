import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
