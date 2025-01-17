"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { Button } from "@/Components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Allreviews from "@/Components/Allreviews";
import Related from "@/Components/Related";
import { BreadcrumbWithCustomSeparator } from "@/Components/Breadcrumb";
let star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />]


interface Iproducts {
    title: string;
    price: string;
    id: number;
    rating: string;
    old_price?: string;
    img_url: string;
    discount?: string;
    img1: string;
    img2: string;
    img3: string;
}

let product: Iproducts[] = [
    {
        title: "T-shirt with Tape Details",
        id: 1,
        price: "$120",
        img_url: "/p1.png",
        rating: "4.5/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/p1.png",
   
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$240",
        old_price: "$260",
        img_url: "/product2.png",
        discount: "-20%",
        rating: "4.5/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/product2.png",
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: "$180",
        img_url: "/product3.png",
        rating: "4.5/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/product3.png",
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: "$130",
        img_url: "/product4.png",
        old_price: '$200',
        discount: "-30%",
        rating: "4.5/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/product4.png",
    },
    {
        title: "Vertical Striped Shirt",
        id: 5,
        price: "$120",
        img_url: "/top1.png",
        rating: "5.0/5",
        discount: "-20%",
        old_price: "$260",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/top1.png",
    },
    {
        title: "Courage Graphic T-shirt",
        id: 6,
        price: "$240",
        img_url: "/top2.png",
        rating: "4.0/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/top2.png",
    },
    {
        title: "Loose Fit Bermuda Shorts",
        id: 7,
        price: "$180",
        img_url: "/top3.png",
        rating: "3.0/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/top3.png",
    },
    {
        title: "faded Skinny Jeans",
        id: 8,
        price: "$130",
        img_url: "/top4.png",
        rating: "4.5/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/top4.png",
    },
    {
        title: "Vertical Striped Shirt",
        id: 9,
        price: "$120",
        img_url: "/related1.png",
        rating: "5.0/5",
        discount: "-20%",
        old_price: "$260",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/related1.png",
    },
    {
        title: "Courage Graphic T-shirt",
        id: 10,
        price: "$240",
        
        img_url: "/related2.png",
        
        rating: "4.0/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/related2.png",
    },
    {
        title: "Loose Fit Bermuda Shorts",
        id: 11,
        price: "$180",
        img_url: "/related3.png",
        rating: "3.0/5",
        img1: "/detail1.png",
        img2: "/detail2.png",
        img3: "/related3.png",

    },
    {
        title: "faded Skinny Jeans",
        id: 12,
        price: "$130",
        img_url: "/related4.png",
         rating: "4.5/5",
         img1: "/detail1.png",
         img2: "/detail2.png",
         img3: "/related4.png",
    },
];

export default function Pro_Detail() {
    const params = useParams();
    const id = params.id;
    const item = product.find((item) => item.id === Number(id));

    if (!item) {
        return <h1>Product Not Found</h1>;
    }

    return (
        <>
        <hr className="mx-36"/>
        <BreadcrumbWithCustomSeparator/>
        <div className="flex flex-col md:flex-row justify-evenly md:-space-x-32 mt-10 md:mt-10 px-4 md:px-0 bg-white max-w-screen-2xl mx-auto">
            {/* left */}
            <div className="md:w-auto md:h-auto space-x-3 sm:space-x-0 md:space-y-3 mt-3 sm:mt-0 flex md:block justify-start  md:justify-start order-2 sm:order-1">
                {/* Images */}
                <Image
                    src={item.img3}
                    className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] object-cover rounded-[20px]"
                    alt="product image"
                    width={152}
                    height={168}
                />
                <Image
                    src={item.img1}
                    className="w-[111px] h-[106px] md:w-[152px] md:h-[168px] object-cover rounded-[20px]"
                    alt="product image"
                    width={152}
                    height={167}
                />
                <Image
                    src={item.img2}
                    className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] object-cover  rounded-[20px]"
                    alt="product image"
                    width={152}
                    height={167}
                />
            </div>
            {/* Mid image */}
            <div className="w-auto h-auto flex justify-center order-1 sm:order-2">
                <Image
                    src={item.img3}
                    alt="product image"
                    width={444}
                    height={530}
                    className="object-cover w-[358px] md:w-[444px] h-[290px] md:h-[530px] rounded-[20px]"
                />
            </div>
            {/* Right div */}
            <div className="w-full md:w-[600px] h-auto mt-5 md:mt-0 text-left order-3 ">
                <h1 className="font-Integral text-2xl md:text-4xl">{item.title}</h1>
                <div className="flex text-yellow-500 mt-4">{star.map((icon, index) => (
                                     <span  key={index}>{icon}</span>
                    ))}</div>
                <p className="text-2xl md:text-3xl font-bold mt-4 flex items-center font-Satoshi">
                    {item.price}
                    {item.old_price && (
                        <span className="text-gray-400 line-through px-3 text-xl md:text-3xl">
                            {item.old_price}
                        </span>
                    )}
                    {item.discount && (
                        <span className="w-[62px] md:w-[72px] h-[31px] md:h-[34px] bg-[#ff3333] bg-opacity-10 text-[#FF3333] text-sm md:text-normal rounded-full flex justify-center items-center">
                            {item.discount}
                        </span>
                    )}
                </p>
                <p className="mt-4 text-[rgba(0,0,0,0.6)] text-sm md:text-base font-Satoshi">
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                    breathable fabric, it offers superior comfort and style.
                </p>
                <hr className="mt-5" />

                {/* Select color */}
                <div className="mt-5">
                    <p className="text-[rgba(0,0,0,0.6)] text-sm md:text-base font-Satoshi">Select Colors</p>
                    <div className="flex space-x-4 pt-3">
                        <div className="w-[37px] h-[37px] bg-[rgba(79,70,49,1)] rounded-full flex justify-center items-center">
                            <Check className="text-white opacity-0 hover:opacity-100" />
                        </div>
                        <div className="w-[37px] h-[37px] bg-[rgba(49,79,74,1)] rounded-full flex justify-center items-center">
                            <Check className="text-white opacity-0 hover:opacity-100" />
                        </div>
                        <div className="w-[37px] h-[37px] bg-[rgba(49,52,79,1)] rounded-full flex justify-center items-center">
                            <Check className="text-white opacity-0 hover:opacity-100" />
                        </div>
                    </div>
                </div>
                <hr className="mt-5" />
                {/* Choose Size */}
                <div>
                    <p className="mt-5 text-[rgba(0,0,0,0.6)] text-sm md:text-base font-Satoshi">Choose Size</p>
                    <div className="flex space-x-3 mt-4 font-Satoshi">
                        <div className="w-[74px] md:w-[86px] h-[39px] md:h-[46px] text-sm sm:text-base bg-[#F0F0F0] flex justify-center items-center rounded-[62px] text-[rgba(0,0,0,0.6)] hover:bg-black hover:text-white">
                            Small
                        </div>
                        <div className=" w-[90px] md:w-[105px] h-[39px] md:h-[46px] text-sm sm:text-base bg-[#F0F0F0] flex justify-center items-center rounded-[62px] text-[rgba(0,0,0,0.6)] hover:bg-black hover:text-white">
                            Medium
                        </div>
                        <div className="w-[76px] md:w-[89px] h-[39px] md:h-[46px] text-sm sm:text-base bg-[#F0F0F0] flex justify-center items-center rounded-[62px] text-[rgba(0,0,0,0.6)] hover:bg-black hover:text-white">
                            Large
                        </div>
                        <div className=" w-[89px] md:w-[104px] h-[39px] md:h-[46px] text-sm sm:text-base bg-[#F0F0F0] flex justify-center items-center rounded-[62px] text-[rgba(0,0,0,0.6)] hover:bg-black hover:text-white">
                            X-Large
                        </div>
                    </div>
                </div>
                <hr className="mt-5" />

                {/* Button */}
                <div className="flex justify-start items-center space-x-5 mt-8 font-Satoshi">
                    <div className="w-[110px] md:w-[170px] h-[44px] md:h-[52px] gap-2  bg-[#F0F0F0] flex md:justify-between items-center rounded-[62px] px-6">
                        <Minus className="w-[20px] md:w-[24px]" />
                        1
                        <Plus className="w-[20px] md:w-[24px]" />
                    </div>
                    <Button className="bg-black text-white w-[236px] md:w-[400px] h-[44px] md:h-[52px] text-sm sm:text-base rounded-[62px] font-Satoshi">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
        <Allreviews/>
        <Related/>
        </>
    );
}
