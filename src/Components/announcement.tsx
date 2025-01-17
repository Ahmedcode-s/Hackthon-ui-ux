import { CgClose } from "react-icons/cg";
export default function AnnouncementBar() {
    return (
        <main className="bg-[#000] w-full  h-[38px] flex  justify-center items-center relative">
            <div className="flex justify-center items-center">
                <h3 className="text-white text-[12px] sm:text-base">

                    Sign up and get 20% off to your first order.</h3>

                <button className="text-white ml-3 text-xs sm:text-sm underline">

                    Sign Up Now

                </button>


            </div>
            <CgClose className="text-white absolute right-[40px]  hidden sm:block" />
        </main>
    );
}
