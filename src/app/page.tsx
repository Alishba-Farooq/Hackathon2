import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import FeatureImage from "./components/Product1"; // Ensure correct import path
import Product2 from "./components/Product2"
import Product3 from "./components/Product3"
import FeatureCards from "./components/Product4"
import CategoriesSection from "./components/Category";
// import Layout from "./components/Layout";



import { TooltipProvider } from "@radix-ui/react-tooltip";


export default function Home() {
  return (
    <TooltipProvider>
      <div>
        {/* <Layout/> */}
        <Navbar />
        <HeroSection />

        
        <ProductList />
        
        {/* Render FeatureImage with props */}
        <FeatureImage/>
        <Product2/>
        <Product3/>
        <FeatureCards/>
        <CategoriesSection/>
        
        <Footer />
      
      </div>
    </TooltipProvider>
  );
}
