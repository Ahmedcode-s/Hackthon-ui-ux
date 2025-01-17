
import Fonts from "@/Components/fonts";

import Hero from "@/Components/Hero";
import Products from "./products/Page";
import Topselling from "./products/Topselling";
import Dress from "@/Components/dress";
import CustomerCarousel from "@/Components/Carousel";





export default function Home() {
  return (
    <div>
     
     <Hero/>
     <Fonts/>
     <Products/>
    <Topselling/>
    <Dress/>
    <CustomerCarousel/>
  
    </div>
    );
}
