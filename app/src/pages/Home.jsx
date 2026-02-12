import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />
      <main className="pt-24 flex flex-col gap-16 md:gap-20"></main>
      <Footer />
    </div>
  );
}

export default Home;
