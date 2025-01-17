import { BreadcrumbWithCustomSeparator } from "@/Components/Breadcrumb";
import { Button } from "@/Components/ui/button";
import { Delete, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { RiDeleteBin6Fill, } from "react-icons/ri";

interface Icart {
    imageurl: string
    title: string,
    id: number,
    size: string,
    color: string,
    price: string,
}
const cartItem: Icart[] = [
    {
        imageurl: "/cart1.png",
        title: "Gradient Graphics T-shirt",
        id: 1,
        size: "large",
        color: "white",
        price: "$145",
    },
    {
        imageurl: "/cart2.png",
        title: "Checkered Shirt",
        id: 2,
        size: "large",
        color: "white",
        price: "$180",
    },
    {
        imageurl: "/cart3.png",
        title: "Skinny Fit Jeans",
        id: 3,
        size: "large",
        color: "white",
        price: "$240",
    }
]

export default function Cart() {
    return (
        <>
        <hr className="mx-16"/>
        <div className="mb-5 mx-0" >
        <BreadcrumbWithCustomSeparator/>
        </div>
        <h1 className="font-Integral md:text-4xl text-3xl md:pl-40 pl-5">YOUR CART</h1>
       

        <div className="flex flex-col md:flex-row justify-center item-start gap-3 mt-6">

            {/* left div  */}
            <div className="w-full md:w-[715px] h-full md:h-[508px] sm:p-4  border rounded-[20px]">
                {
                    cartItem.map((item) => {
                        return (
                            <div className="flex justify-between  p-4 border-b" key={item.id}>
                                <div className="flex gap-5  ">
                                    <Image src={item.imageurl} alt={item.title} className="rounded-2xl w-[100px] sm:w-[124px] h-[100px] sm:h-[124px] " width={124} height={124}></Image>
                                    <div>
                                        <h3 className="font-Satoshi font-bold text-xl">{item.title}</h3>
                                        <p className="font-Satoshi text-sm">Size:{item.size}</p>
                                        <p className="font-Satoshi text-sm">Color: {item.color}</p>
                                        <p className="font-Satoshi font-bold text-2xl pt-4">{item.price}</p>

                                    </div>
                                </div>
                                {/* Right side */}
                                <div className="flex flex-col justify-between items-end space-y-5">
                                    <RiDeleteBin6Fill className="text-red-600 text-xl" />
                                    <div className="w-[105px] md:w-[126px] h-[31px] md:h-[44px] gap-2  bg-[#F0F0F0] flex md:justify-between items-center rounded-[62px] px-6"><Minus className="w-[20px] md:w-[24px]" />1<Plus className="w-[20px] md:w-[24px]" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Right div  */}
            <div className="w-[358px] md:w-[505px] h-[390px] md:h-[458px] border flex flex-col rounded-[20px]">
                <div className="w-[100%] sm:p-5 p-4    space-y-5" >
                    <h1 className="font-Satoshi font-bold sm:text-2xl text-xl">Order Summary</h1>
                    <p className="flex justify-between font-Satoshi text-sm text-[#00000099]">Subtotal <span className="font-bold text-black">$565</span></p>
                    <p className="flex justify-between font-Satoshi text-[#00000099]">Discount(20%)<span className="font-bold text-[#FF3333]">-$113 </span></p>
                    <p className="flex justify-between font-Satoshi text-[#00000099] ">Delivery Fee<span className="font-bold text-black">$15</span></p>
                    <hr />
                    <p className="flex justify-between font-Satoshi text-base sm:text-lg md:pt-4 pb-2">Total<span className="font-bold sm:text-2xl text-xl">$467</span></p>

                    <div>
                        <input id="Add-promo-code" className="bg-[#F0F0F0] px-5 md:w-[326px] w-[218px] md:h-[48px]  h-[48px] rounded-[63px] text-gray-600 outline-nonenone" placeholder="Add promo code" />
                        <Button className="ml-2 rounded-[62px] md:h-[48px] h-[48px] md:w-[119px] w-[88px]">Apply</Button>
                    <Button className="w-full sm:h-[60px] h-[54px] rounded-full md:mt-5 mt-2">Go To Checkout</Button>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}