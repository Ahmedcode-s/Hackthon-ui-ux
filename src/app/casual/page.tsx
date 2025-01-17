import { AccordionDemo } from "@/Components/filter";
import { CheckboxDemo } from "@/Components/check";
import { Dressstyle } from "@/Components/dressstyle";
import Size from "@/Components/size";
import { SliderDemo } from "@/Components/slider";
import Casualshirts from "@/Components/casualshirts";
import { BreadcrumbCasual } from "./breadcrumb";

export default function Casual() {
    return (
        <>
        <BreadcrumbCasual/>
       <main className="flex flex-col sm:flex-row justify-center items-center md:items-start space-x-3 px-0 md:px-24 mt-6">
       {/* left  */}
       <div className="w-[90%] h-full md:w-[295px] md:h-full border rounded-[20px]">
        <AccordionDemo/>
        <SliderDemo/>
        <CheckboxDemo/>
        <Size/>
        <Dressstyle/>
       </div>
       {/* Right  */}
       <div className="w-full md:w-[1100px] h-full sm:h-full  mt-16 md:mt-0 ">
       <Casualshirts/>
       </div>
       
       </main>
       </>
    )
}