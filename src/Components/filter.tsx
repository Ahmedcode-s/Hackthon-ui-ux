import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"
import { GiSettingsKnobs } from "react-icons/gi";

export function AccordionDemo() {
    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-5">
                <h1 className="font-Satoshi text-xl">Filters</h1>
                <GiSettingsKnobs className="text-2xl  text-[rgba(0,0,0,0.4)]" />
            </div>
            <hr className=""/>
            <Accordion type="single" collapsible className="w-full font-Satoshi text-[rgba(0,0,0,0.6)] mt-3 mb-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>T-shirts</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Shorts</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Shirts</AccordionTrigger>
                    <AccordionContent>
                        Yes. Its animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Hoodie</AccordionTrigger>
                    <AccordionContent>
                        Yes. Its animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Jeans</AccordionTrigger>
                    <AccordionContent>
                        Yes. Its animated by default, but you can disable it if you prefer.
                    </AccordionContent>

                </AccordionItem>
            </Accordion>
            <hr />
            
        </div>
    )
}
