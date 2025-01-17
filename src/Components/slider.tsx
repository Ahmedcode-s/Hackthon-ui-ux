import { cn } from "@/lib/utils"
import { Slider } from "@/Components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
    return (
        <div className="px-5 mb-5">
            <h1 className="font-Satoshi text-xl mb-6">Price</h1>
            <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className={cn("w-[100%]", className)}
                {...props}
            />
            <div className="flex justify-around items-center mt-1 mb-4">
                <h1 className="font-Satoshi text-sm">$50</h1>
                <h1 className="font-Satoshi text-sm">$100</h1>
            </div>
            <hr className="" />

        </div>
    )
}
