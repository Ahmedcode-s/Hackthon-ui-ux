import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
interface Iproducts {
    title: string,
    price: string,
    id: number,
    rating: string,
    old_price?: string,
    img_url: string,
    discount?: string,
}

let product: Iproducts[] = [
    {
        title: "Vertical Striped Shirt",
        id: 5,
        price: "$120",
        img_url: "/top1.png",
        rating: "5.0/5",
        discount: "-20%",
        old_price: "$260",
    },
    {
        title: "Courage Graphic T-shirt",
        id: 6,
        price: "$240",

        img_url: "/top2.png",

        rating: "4.0/5"
    },
    {
        title: "Loose Fit Bermuda Shorts",
        id: 7,
        price: "$180",
        img_url: "/top3.png",
        rating: "3.0/5",

    },
    {
        title: "faded Skinny Jeans",
        id: 8,
        price: "$130",
        img_url: "/top4.png",


        rating: "4.5/5"
    },
]
let star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />]


export default function Topselling() {
    return (
        <div className="w-full h-full max-w-sceeen-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-Integral text-center mt-8">TOP SELLING</h1>

            {/* Card  */}
            <div className="flex flex-col  md:flex-row justify-center items-center md:justify-between px-32 mt-16">
                {
                    product.map((data) => {
                        return (
                            <div key={data.id} className="mb-20 sm:mb-0">
                                <Link href={`/products/${data.id}`}><div className="w-[296px] h-[300px] bg-[#F0EEED] rounded-[20px] overflow-hidden ">
                                    <Image src={data.img_url} alt={data.title} width={296} height={444} className={`object-contain -mt-20 ${data.id === 4 ? "pt-3" : ""}`}></Image>

                                </div></Link>
                                <div>
                                    <p className="text-xl mt-2 font-Satoshi mb-2">{data.title}</p>
                                    <p className="flex text-[#ffe032]">{star.map((icon, index) => (<span key={index}>{icon}</span>))} <span className="text-sm text-black px-3 font-Satoshi">{data.rating}</span></p>
                                    <p className="font-bold mt-1 flex items-center">
                                        <span className="text-2xl font-Satoshi">{data.price}</span>
                                        {data.old_price && (
                                            <span className="text-gray-400  line-through px-3 text-2xl">{data.old_price}</span>
                                        )}
                                        {data.discount && ( // Only render the discount badge if data.discount exists
                                            <span className="bg-[#ff3333] bg-opacity-10 text-[#FF3333] text-xs w-[58px] h-[28px] flex justify-center items-center rounded-full ">
                                                {data.discount}
                                            </span>
                                        )}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            <div className="text-center pt-10 pb-16"><button className=" text-base font-Satoshi border  px-20 py-2.5 rounded-[62px] ">View All</button></div>

        </div>
    )
}

