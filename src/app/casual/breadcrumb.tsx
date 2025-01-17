import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"

export function BreadcrumbCasual() {
    return (
        <Breadcrumb className="font-Satoshi md:pl-24 pl-5 pt-6 max-w-screen-2xl mx-auto">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <Link href="/components">Shop</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
               
            </BreadcrumbList>
        </Breadcrumb>
    )
}
