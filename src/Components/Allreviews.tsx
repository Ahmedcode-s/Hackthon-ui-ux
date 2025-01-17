import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { Button } from "./ui/button";

const Reviews = [
    {
        name: "Sarah M.",
        feedback:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
        rating: 5,
        verified: true,
        date:"Posted on january 10, 2025"
    },
    {
        name: "John D.",
        feedback:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
        rating: 5,
        verified: true,
        date:"Posted on january 11, 2025"
    },
    {
        name: "Emma L.",
        feedback:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: false,
        date:"Posted on january 13, 2025"
    },
    {
        name: "Michael B.",
        feedback:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: true,
        date:"Posted on january 12, 2025"
    },
    {
        name: "Sophia K.",
        feedback:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: true,
        date:"Posted on january 14, 2025",
    },
    {
        name: "Sophia K.",
        feedback:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: true,
        date:"Posted on january 14, 2025",
    },
];
let star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />]



export default function Allreviews() {
    return (
        <main className="md:mt-40 max-w-screen-2xl mx-auto">
            {/* Top div  */}
            <div className="p-5 flex justify-between">
                <h1 className="text-2xl font-Satoshi">All Reviews</h1>
                <div className="space-x-3 flex">
                <Button variant={"outline"} className="hidden md:block">Latest</Button>
                <Button>Write a Review</Button>
                </div>
            </div>
            {/* Container  */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0">
                    {
                        Reviews.map((data, index) => {
                            return (
                               <div className=" border p-5 rounded-[20px] " key={index} >
                                <p className="flex text-yellow-400">{star.map((icon, index) => (
                                     <span  key={index}>{icon}</span>
                    ))}</p>
<h2 className="font-Satoshi font-semibold text-xl mt-1 flex items-center">{data.name} <Check className=" bg-[#01AB31] rounded-full text-white w-[15px] h-[15px] ml-3"/> </h2>
                                 <p className="text-sm font-Satoshi text-[rgba(0,0,0,0.6)]">{data.feedback}</p>
                                 <p className="mt-5 text-[rgba(0,0,0,0.6)] font-Satoshi">{data.date}</p>
                               </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}