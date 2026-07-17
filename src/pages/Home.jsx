import Hero from "../components/header/Hero";
import Categories from "../components/categories/categories";
import About from "../components/About/About";
import TrendingProduct from "../components/TrendingProduct/TrendingProduct";
import Contact from "../components/contact/contact";


function Home(){

  return (
    <>
      <Hero />

      <TrendingProduct />

      <Categories />

      <About />

      <Contact />
    </>
  );

}

export default Home;