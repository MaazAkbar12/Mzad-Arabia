import Header from "../components/header/header";
import Hero from "../components/header/Hero"
import Categories from "../components/categories/categories";
import About from "../components/About/About";
import TrendingProduct from "../components/TrendingProduct/TrendingProduct";
import Footer from "../components/Footer/Footer";


function Home(){
   return (
    <>
      <Header />
      <Hero />
      <TrendingProduct />
      <Categories />

      <About />

    

      <Footer />
    </>
  );
}

export default Home;